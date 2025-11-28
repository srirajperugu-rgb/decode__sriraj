import React, { useState } from 'react';
import { Mail, Instagram, Phone, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-500 text-lg">Have a question about a book or need a recommendation? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Contact Info */}
          <div className="bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
               <div className="space-y-8">
                 <div className="flex items-start gap-4">
                   <Phone className="h-6 w-6 text-green-400 mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Phone</h4>
                     <p className="text-slate-400">917013790198</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Mail className="h-6 w-6 text-blue-400 mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Email</h4>
                     <p className="text-slate-400">decodesriraj11@gmail.com</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <Instagram className="h-6 w-6 text-pink-400 mt-1" />
                   <div>
                     <h4 className="font-semibold text-lg">Social Media</h4>
                     <div className="flex flex-col gap-1 mt-1">
                        <a href="https://www.instagram.com/decode__sriraj?igsh=ZnJyazZod3U3Z3py" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                          Instagram: @Decode__sriraj
                        </a>
                        <a href="https://t.me/decodesrirajmaind" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                          Telegram: https://t.me/decodesrirajmaind
                        </a>
                     </div>
                   </div>
                 </div>
                 
                 <div className="pt-6">
                    <a 
                      href="https://wa.me/917013790198" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-green-500/25"
                    >
                      <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
                    </a>
                 </div>
               </div>
             </div>

             <div className="mt-12 relative z-10">
               <p className="text-slate-400 text-sm">
                 Operating Hours: <br/> Mon - Fri: 9am - 6pm EST
               </p>
             </div>
          </div>

          {/* Form */}
          <div className="p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;