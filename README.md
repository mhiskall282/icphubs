
# 🎓 MicroScholar — A Decentralized Scholarship Platform on the Internet Computer (ICP)

MicroScholar is a decentralized application (dApp) that enables students to request scholarships and allows donors to fund them directly through blockchain smart contracts. Built on the **Internet Computer Protocol (ICP)**, it leverages **canisters**, decentralized identity, and optional integrations like **Supabase** for additional off-chain data management.



## 🌐 Live Demo

🧪 [Coming Soon] - Will be deployed on the Internet Computer via [DFINITY Canister Hosting](https://internetcomputer.org)

---

## 🧠 Overview

- **Smart Contracts** (Canisters): Written in **Motoko** (or Rust), managing scholarships, donors, and transactions on-chain.
- **Frontend**: Built with **React** (Vite/Next.js) and hosted on the ICP or web platform.
- **Authentication**: Using **Internet Identity** for secure decentralized login.
- **Optional Backend**: Supabase for mock/off-chain data (e.g., analytics, testing, or admin stats).

---

## 🛠️ Tech Stack

| Layer       | Tech                                      |
|------------ |-------------------------------------------|
| Blockchain  | Internet Computer (ICP)                   |
| Smart Contracts | Motoko (or Rust)                     |
| Identity    | Internet Identity                         |
| Frontend    | React + Vite / Next.js                    |
| Styling     | Tailwind CSS (optional)                   |
| State       | Canister state / localStorage / Supabase |
| Off-chain DB (Optional) | Supabase                      |

---

## 📁 Project Structure

```

/frontend         # React frontend (hosted on ICP or external)
/backend          # Node.js server if used off-chain (optional)
/canisters
/microscholar   # Motoko/Rust source code for smart contracts
/types          # Shared types for IDL and actor interface

````

---

## 🚀 Features

- 🔐 **Internet Identity** for user login
- 🧑‍🎓 Students can submit scholarship requests
- 💰 Donors can fund requests transparently
- ⛓️ Transactions stored on-chain
- 📊 Admin dashboard with live metrics (optionally powered by Supabase)
- 🛡️ Role-based UI for students, donors, and admins

---

## 🧑‍💻 Getting Started

### 1. Prerequisites

- [DFX SDK](https://smartcontracts.org/docs/quickstart/quickstart.html)
- Node.js & npm
- Supabase account (optional)

### 2. Clone the repo

```bash
git clone https://github.com/your-username/microscholar-icp.git
cd microscholar-icp
````

### 3. Install DFX & Start Local Network

```bash
dfx start --background
```

### 4. Deploy Canisters (Smart Contracts)

```bash
dfx deploy
```

### 5. Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

### 6. Open the App

```bash
http://localhost:5173
```

---

## 🔐 Authentication

We use **Internet Identity** for secure and decentralized authentication.

```ts
import { AuthClient } from '@dfinity/auth-client';

const authClient = await AuthClient.create();
await authClient.login({
  identityProvider: "https://identity.ic0.app",
  onSuccess: () => {
    // Load user session
  }
});
```

---

## 📦 Canister Interface (Motoko)

```motoko
actor class MicroScholar() = this {

  public type User = {
    id : Principal;
    name : Text;
    role : Text;
  };

  public type ScholarshipRequest = {
    id : Text;
    studentId : Principal;
    amount : Nat;
    approved : Bool;
  };

  stable var requests : [ScholarshipRequest] = [];

  public func submitRequest(req : ScholarshipRequest) : async Text {
    requests := Array.append(requests, [req]);
    return "Request submitted!";
  };
};
```

---

## 📊 Supabase (Optional)

Set up tables:

* `students`, `donors`, `scholarship_requests`, `transactions`

Use mock data:

```ts
import { mockStudents, mockDonors } from './data/mockData';
```

---

## 🌍 Deployment

To deploy your dApp to the Internet Computer:

```bash
dfx deploy --network ic
```

You’ll get a canister URL like:
`https://<canister-id>.ic0.app`

---

## 🧪 Testing

```bash
dfx canister call microscholar submitRequest '(record { id = "r1"; studentId = principal "aaaaa-aa"; amount = 1000; approved = false })'
```

---

## 🧠 Roadmap

* ✅ Basic student/donor flow
* ✅ On-chain request tracking
* ⏳ Donor profile + donation ledger
* ⏳ Admin dashboard with analytics
* ⏳ Token-based funding support (ICRC-1)

---

## 📸 Screenshots

*Add screenshots of your UI here (student dashboard, admin panel, donation form, etc.)*

---

## 👥 Contributors

* [Your Name](https://github.com/your-username)
* [Open for PRs](https://github.com/your-username/microscholar-icp)

---

## 📜 License

This project is licensed under the MIT License.

---

## 🔗 Related Links

* [Internet Computer Docs](https://internetcomputer.org/docs/)
* [Motoko Language](https://github.com/dfinity/motoko)
* [DFX SDK](https://smartcontracts.org/docs/developers-guide/cli-reference/dfx.html)
* [Supabase](https://supabase.io)


