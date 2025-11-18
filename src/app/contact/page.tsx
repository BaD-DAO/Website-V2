'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center border-b border-white/10 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Get in touch with BuildaDAO. We're here to help you on your journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card p-10">
              <h2 className="text-3xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="first-500">First 500 Program</option>
                    <option value="academy">Academy</option>
                    <option value="events">Events</option>
                    <option value="talent-pool">Talent Pool</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="w-full button-primary py-3 text-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="card p-10">
                <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-white/70">contact@buildadao.org</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Community</h3>
                    <p className="text-white/70 mb-4">Join our community channels</p>
                    <div className="flex flex-wrap gap-3">
                      <a href="#" className="badge hover:bg-white/20 transition-colors">
                        Discord
                      </a>
                      <a href="#" className="badge hover:bg-white/20 transition-colors">
                        Twitter
                      </a>
                      <a href="#" className="badge hover:bg-white/20 transition-colors">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                    <p className="text-white/70">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="card p-10">
                <h2 className="text-2xl font-semibold mb-6">Office Locations</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Ethiopia</h3>
                    <p className="text-white/70 text-sm">Addis Ababa</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ghana</h3>
                    <p className="text-white/70 text-sm">Accra</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Nigeria</h3>
                    <p className="text-white/70 text-sm">Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-3">How do I join the First 500 program?</h3>
              <p className="text-white/70">
                Visit our First 500 page and submit an application. Our team will review your startup and get back to you within 2 weeks.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-3">What courses are available in the Academy?</h3>
              <p className="text-white/70">
                We offer both junior-level and enterprise-level courses in AI, blockchain, and Web3 development. Check out our Academy page for the full curriculum.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-3">How can I become an event ambassador?</h3>
              <p className="text-white/70">
                Apply through our Events page. We're looking for passionate community leaders who want to organize tech events in their countries.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-3">Can I start a BuildaDAO chapter in my country?</h3>
              <p className="text-white/70">
                Yes! We're always looking to expand. Contact us with your proposal and we'll discuss how to bring BuildaDAO to your community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

