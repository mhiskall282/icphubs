import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Brain, Send, Bot, Sparkles } from 'lucide-react';

export const AIAssistantPage: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI scholarship assistant. How can I help you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, 
      { role: 'user', content: input },
      { role: 'assistant', content: 'Here are some scholarship opportunities that match your interests...' }
    ]);
    setInput('');
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <Brain className="text-secondary-500 mr-3" size={32} />
          <h1 className="text-3xl font-bold text-white">AI Scholarship Assistant</h1>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Bot className="text-accent-500 mr-2" size={20} />
              <h2 className="text-xl font-semibold text-white">Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start p-4 bg-primary-800 rounded-lg">
                <Sparkles className="text-secondary-500 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-white">Personalized Recommendations</h3>
                  <p className="text-sm text-gray-400">Get AI-powered scholarship suggestions based on your profile</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-primary-800 rounded-lg">
                <Sparkles className="text-secondary-500 mr-3" size={20} />
                <div>
                  <h3 className="font-medium text-white">Application Assistance</h3>
                  <p className="text-sm text-gray-400">Get help with scholarship applications and essays</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'assistant'
                        ? 'bg-primary-800 text-white'
                        : 'bg-secondary-500 text-primary-900'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about scholarships..."
            className="flex-1 px-4 py-2 bg-primary-800 border border-primary-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
          />
          <Button type="submit" leftIcon={<Send size={18} />}>
            Send
          </Button>
        </form>
      </div>
    </Layout>
  );
};