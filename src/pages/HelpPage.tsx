import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

const faqs = [
  {
    question: 'How do I apply for a scholarship?',
    answer: 'To apply for a scholarship, navigate to the Explore page, find a suitable scholarship, and click "Apply". Follow the application instructions and submit required documents.'
  },
  {
    question: 'How are funds distributed?',
    answer: 'Funds are distributed directly through the Internet Computer Protocol blockchain once a scholarship request is fully funded and verified.'
  },
  {
    question: 'What documents do I need?',
    answer: 'Required documents typically include proof of enrollment, academic transcripts, and a personal statement. Specific requirements vary by scholarship.'
  }
];

export const HelpPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <HelpCircle className="text-secondary-500 mr-3" size={32} />
          <h1 className="text-3xl font-bold text-white">Help Center</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-secondary-500/20 to-secondary-500/5">
            <CardContent className="p-6 text-center">
              <Book className="mx-auto mb-4 text-secondary-500" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm">Browse our comprehensive guides and tutorials</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5">
            <CardContent className="p-6 text-center">
              <MessageCircle className="mx-auto mb-4 text-accent-500" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">Join discussions with other users</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success-500/20 to-success-500/5">
            <CardContent className="p-6 text-center">
              <Phone className="mx-auto mb-4 text-success-500" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-400 text-sm">Get help from our support team</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-primary-700 last:border-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Contact Support</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="Describe your issue..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-secondary-500 text-primary-900 rounded-lg font-medium hover:bg-secondary-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};