use candid::{CandidType, Deserialize, Principal};
use ic_cdk::api::{caller, time};
use ic_cdk_macros::{query, update};
use std::cell::RefCell;
use std::collections::BTreeMap;
use std::option::Option;
use std::vec::Vec;

// Data Structures
#[derive(Clone, Debug, CandidType, Deserialize)]
struct User {
    pub principal: Principal,
    pub name: String,
    pub email: String,
    pub bio: String,
    pub education: Vec<Education>,
    pub skills: Vec<String>,
    pub created_at: u64,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
struct Education {
    pub institution: String,
    pub degree: String,
    pub field_of_study: String,
    pub start_date: u64,
    pub end_date: Option<u64>,
    pub gpa: Option<f32>,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
struct Review {
    pub application_id: String,
    pub reviewer: Principal,
    pub score: u8,
    pub comments: String,
    pub timestamp: u64,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
struct Notification {
    pub user: Principal,
    pub message: String,
    pub timestamp: u64,
    pub read: bool,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
struct Payment {
    pub scholarship_id: String,
    pub recipient: Principal,
    pub amount: u64,
    pub timestamp: u64,
    pub status: PaymentStatus,
}

#[derive(Clone, Debug, CandidType, Deserialize, PartialEq)] // Added PartialEq
enum PaymentStatus {
    Pending,
    Completed,
    Failed,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
struct Application {
    pub applicant: Principal,
    pub scholarship_id: String,
    pub status: ApplicationStatus,
    pub timestamp: u64,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
enum ApplicationStatus {
    Pending,
    Approved,
    Rejected,
}

#[derive(Clone, Debug, CandidType, Deserialize)]
struct Scholarship {
    pub scholarship_id: String,
    pub name: String,
    pub description: String,
    pub amount: u64,
    pub provider: Principal,
    pub is_active: bool,
}

#[derive(CandidType, Deserialize)]
struct ScholarshipStats {
    pub scholarship_id: String,
    pub total_applications: usize,
    pub approved_applications: usize,
    pub total_paid: u64,
}

// Storage
thread_local! {
    static USERS: RefCell<BTreeMap<Principal, User>> = RefCell::default();
    static SCHOLARSHIPS: RefCell<BTreeMap<String, Scholarship>> = RefCell::default();
    static APPLICATIONS: RefCell<BTreeMap<String, Application>> = RefCell::default();
    static REVIEWS: RefCell<BTreeMap<String, Vec<Review>>> = RefCell::default();
    static NOTIFICATIONS: RefCell<BTreeMap<Principal, Vec<Notification>>> = RefCell::default();
    static PAYMENTS: RefCell<Vec<Payment>> = RefCell::default();
}

// User Profile Management
#[update]
fn create_user_profile(name: String, email: String, bio: String) -> Result<(), String> {
    let caller = caller();
    let user = User {
        principal: caller,
        name,
        email,
        bio,
        education: Vec::new(),
        skills: Vec::new(),
        created_at: time(),
    };

    USERS.with(|users| {
        if users.borrow().contains_key(&caller) {
            return Err("User profile already exists".to_string());
        }
        users.borrow_mut().insert(caller, user);
        Ok(())
    })
}

#[update]
fn add_education(education: Education) -> Result<(), String> {
    let caller = caller();
    USERS.with(|users| {
        let mut users_map = users.borrow_mut();
        match users_map.get_mut(&caller) {
            Some(user) => {
                user.education.push(education);
                Ok(())
            }
            None => Err("User profile not found".to_string()),
        }
    })
}

#[update]
fn add_skills(skills: Vec<String>) -> Result<(), String> {
    let caller = caller();
    USERS.with(|users| {
        let mut users_map = users.borrow_mut();
        match users_map.get_mut(&caller) {
            Some(user) => {
                user.skills.extend(skills);
                Ok(())
            }
            None => Err("User profile not found".to_string()),
        }
    })
}

// Scholarship Management
#[update]
fn create_scholarship(name: String, description: String, amount: u64) -> Result<(), String> {
    let caller = caller();
    let scholarship_id = format!("scholarship_{}", time());
    let scholarship = Scholarship {
        scholarship_id: scholarship_id.clone(),
        name,
        description,
        amount,
        provider: caller,
        is_active: true,
    };

    SCHOLARSHIPS.with(|scholarships| {
        scholarships
            .borrow_mut()
            .insert(scholarship_id.clone(), scholarship);
    });

    Ok(())
}

#[update]
fn deactivate_scholarship(scholarship_id: String) -> Result<(), String> {
    SCHOLARSHIPS.with(|scholarships| {
        if let Some(scholarship) = scholarships.borrow_mut().get_mut(&scholarship_id) {
            scholarship.is_active = false;
            Ok(())
        } else {
            Err("Scholarship not found".to_string())
        }
    })
}

// Application Management
#[update]
fn submit_application(scholarship_id: String) -> Result<(), String> {
    let caller = caller();
    let application_id = format!("app_{}", time());

    let application = Application {
        applicant: caller,
        scholarship_id,
        status: ApplicationStatus::Pending,
        timestamp: time(),
    };

    APPLICATIONS.with(|applications| {
        applications
            .borrow_mut()
            .insert(application_id.clone(), application);
    });

    Ok(())
}

// Review System with AI-driven scoring
#[update]
fn review_application(application_id: String, score: u8, comments: String) -> Result<(), String> {
    let caller = caller();
    let application =
        APPLICATIONS.with(|applications| applications.borrow().get(&application_id).cloned());

    match application {
        Some(app) => {
            let scholarship = SCHOLARSHIPS
                .with(|scholarships| scholarships.borrow().get(&app.scholarship_id).cloned());

            match scholarship {
                Some(s) if s.provider == caller => {
                    let review = Review {
                        application_id: application_id.clone(),
                        reviewer: caller,
                        score,
                        comments,
                        timestamp: time(),
                    };

                    REVIEWS.with(|reviews| {
                        let mut reviews_map = reviews.borrow_mut();
                        let app_reviews = reviews_map
                            .entry(application_id.clone())
                            .or_insert_with(Vec::new);
                        app_reviews.push(review);
                    });

                    // Update application status based on score
                    APPLICATIONS.with(|applications| {
                        let mut apps_map = applications.borrow_mut();
                        if let Some(app) = apps_map.get_mut(&application_id) {
                            app.status = if score >= 7 {
                                ApplicationStatus::Approved
                            } else {
                                ApplicationStatus::Rejected
                            };
                        }
                    });

                    // Send notification to applicant
                    let status_msg = if score >= 7 { "approved" } else { "rejected" };
                    send_notification(
                        app.applicant,
                        format!(
                            "Your application for scholarship {} has been {}",
                            app.scholarship_id, status_msg
                        ),
                    );

                    Ok(())
                }
                _ => Err("Only the scholarship provider can review applications".to_string()),
            }
        }
        None => Err("Application not found".to_string()),
    }
}

// Notification System
fn send_notification(user: Principal, message: String) {
    let notification = Notification {
        user,
        message,
        timestamp: time(),
        read: false,
    };

    NOTIFICATIONS.with(|notifications| {
        let mut notif_map = notifications.borrow_mut();
        let user_notifs = notif_map.entry(user).or_insert_with(Vec::new);
        user_notifs.push(notification);
    });
}

#[query]
fn get_notifications() -> Vec<Notification> {
    let caller = caller();
    NOTIFICATIONS.with(|notifications| {
        notifications
            .borrow()
            .get(&caller)
            .cloned()
            .unwrap_or_default()
    })
}

#[update]
fn mark_notification_as_read(timestamp: u64) -> Result<(), String> {
    let caller = caller();
    NOTIFICATIONS.with(|notifications| {
        let mut notif_map = notifications.borrow_mut();
        match notif_map.get_mut(&caller) {
            Some(user_notifs) => {
                for notif in user_notifs.iter_mut() {
                    if notif.timestamp == timestamp {
                        notif.read = true;
                        return Ok(());
                    }
                }
                Err("Notification not found".to_string())
            }
            None => Err("No notifications found for user".to_string()),
        }
    })
}

// Payment Processing
#[update]
fn process_payment(
    scholarship_id: String,
    recipient: Principal,
    amount: u64,
) -> Result<(), String> {
    let caller = caller();
    let scholarship =
        SCHOLARSHIPS.with(|scholarships| scholarships.borrow().get(&scholarship_id).cloned());

    match scholarship {
        Some(s) if s.provider == caller => {
            let payment = Payment {
                scholarship_id: scholarship_id.clone(),
                recipient,
                amount,
                timestamp: time(),
                status: PaymentStatus::Pending,
            };

            PAYMENTS.with(|payments| {
                payments.borrow_mut().push(payment.clone());
            });

            // Mark payment as completed (mock implementation)
            PAYMENTS.with(|payments| {
                let mut payments_vec = payments.borrow_mut();
                if let Some(p) = payments_vec.iter_mut().last() {
                    p.status = PaymentStatus::Completed;
                }
            });

            send_notification(
                recipient,
                format!(
                    "You have received a payment of {} for scholarship {}",
                    amount, scholarship_id
                ),
            );

            Ok(())
        }
        _ => Err("Only the scholarship provider can process payments".to_string()),
    }
}

// Scholarship Search
#[query]
fn search_scholarships(
    query: String,
    min_amount: Option<u64>,
    max_amount: Option<u64>,
) -> Vec<Scholarship> {
    let query_lower = query.to_lowercase();
    SCHOLARSHIPS.with(|scholarships| {
        scholarships
            .borrow()
            .values()
            .filter(|s| {
                (s.name.to_lowercase().contains(&query_lower)
                    || s.description.to_lowercase().contains(&query_lower))
                    && min_amount.map_or(true, |min| s.amount >= min)
                    && max_amount.map_or(true, |max| s.amount <= max)
            }).cloned()
            .collect()
    })
}

#[query]
fn get_scholarship_stats(scholarship_id: String) -> ScholarshipStats {
    let total_applications = APPLICATIONS.with(|applications| {
        applications
            .borrow()
            .values()
            .filter(|app| app.scholarship_id == scholarship_id)
            .count()
    });

    let approved_applications = APPLICATIONS.with(|applications| {
        applications
            .borrow()
            .values()
            .filter(|app| {
                app.scholarship_id == scholarship_id
                    && matches!(app.status, ApplicationStatus::Approved)
            }).count()
    });

    let total_paid = PAYMENTS.with(|payments| {
        payments
            .borrow()
            .iter()
            .filter(|p| p.scholarship_id == scholarship_id && p.status == PaymentStatus::Completed)
            .map(|p| p.amount)
            .sum::<u64>()
    });

    ScholarshipStats {
        scholarship_id,
        total_applications,
        approved_applications,
        total_paid,
    }
}

// At the end of your lib.rs file
ic_cdk::export_candid!();
