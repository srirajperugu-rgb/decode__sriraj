import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Decode__sriraj</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Decode__sriraj is a trusted platform offering high-quality coding-language books curated for students, developers, and tech learners aiming to grow their programming skills.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Curated Quality</h3>
            <p className="text-slate-600">
              We carefully select books that help you truly master the concepts, from basic syntax to advanced algorithms.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Learner Focused</h3>
            <p className="text-slate-600">
              Whether you are a student or a professional developer, our resources are designed to accelerate your growth.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Trusted Platform</h3>
            <p className="text-slate-600">
              Join a community of tech learners who trust Decode__sriraj for their educational needs.
            </p>
          </div>
        </div>

        {/* Uploaded Image Section */}
        <div className="mt-20 text-center">
           <h3 className="text-2xl font-bold text-slate-900 mb-8">Meet The Founder</h3>
           <div className="relative inline-block">
             <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-20"></div>
             <div className="relative w-64 h-64 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-white shadow-xl mx-auto">
               {/* Placeholder for uploaded image */}
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                 alt="Founder" 
                 className="w-full h-full object-cover"
               />
             </div>
             <p className="mt-4 font-semibold text-slate-900">Sriraj</p>
             <p className="text-sm text-slate-500">Founder, Decode__sriraj</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;