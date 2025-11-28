import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Rocket, Star, Shield, Smartphone, Globe, Code, Calculator, FlaskConical, MessageCircle, Phone, Mail } from 'lucide-react';

const Promo: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-purple-500 selection:text-white">
      
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20 px-4 text-center perspective-[1000px]">
        <div className="inline-block mb-6 animate-bounce">
           <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.3)]">
             Admissions Open 2024
           </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-blue-200 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" style={{ transform: 'rotateX(5deg)' }}>
          FUTURE OF <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">EDUCATION</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Premium 3D Interactive Learning for <span className="text-white font-bold">Classes 3 to 8</span>. 
          Master Math, Science & Coding with the world's best curriculum.
        </p>

        {/* 3D Hero Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/contact" className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-[0_10px_40px_-10px_rgba(124,58,237,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(124,58,237,0.7)] transition-all transform hover:-translate-y-1 hover:scale-105">
            <span className="flex items-center gap-2">Get Started Now <Rocket className="h-5 w-5 group-hover:animate-ping" /></span>
          </Link>
          <button className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all transform hover:-translate-y-1">
            View Syllabus
          </button>
        </div>
      </div>

      {/* Floating 3D Cards Section - Courses */}
      <div className="relative z-10 py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-lg">
          Interactive <span className="text-purple-400">Curriculum</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[2000px]">
          {/* Card 1 */}
          <div className="group relative h-[400px] bg-gradient-to-b from-white/10 to-white/5 rounded-[30px] p-8 border border-white/10 backdrop-blur-xl transition-all duration-500 transform hover:rotate-y-12 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[30px] transition-opacity"></div>
             <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8 text-white" />
             </div>
             <h3 className="text-2xl font-bold mb-4">Coding & AI</h3>
             <ul className="space-y-3 text-slate-300">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Python Basics</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Game Dev</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>Logic Building</li>
             </ul>
             <div className="absolute bottom-8 left-8 text-blue-300 font-bold text-sm tracking-wider">CLASSES 3-8</div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-[400px] bg-gradient-to-b from-white/10 to-white/5 rounded-[30px] p-8 border border-white/10 backdrop-blur-xl transition-all duration-500 transform hover:rotate-y-12 hover:scale-105 hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]">
             <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[30px] transition-opacity"></div>
             <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <Calculator className="h-8 w-8 text-white" />
             </div>
             <h3 className="text-2xl font-bold mb-4">Mathematics</h3>
             <ul className="space-y-3 text-slate-300">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>Visual Math</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>Geometry 3D</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>Olympiad Prep</li>
             </ul>
             <div className="absolute bottom-8 left-8 text-pink-300 font-bold text-sm tracking-wider">CLASSES 3-8</div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-[400px] bg-gradient-to-b from-white/10 to-white/5 rounded-[30px] p-8 border border-white/10 backdrop-blur-xl transition-all duration-500 transform hover:rotate-y-12 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,197,94,0.3)]">
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[30px] transition-opacity"></div>
             <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                <FlaskConical className="h-8 w-8 text-white" />
             </div>
             <h3 className="text-2xl font-bold mb-4">Science</h3>
             <ul className="space-y-3 text-slate-300">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Virtual Labs</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Physics Engine</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>Space & Nature</li>
             </ul>
             <div className="absolute bottom-8 left-8 text-green-300 font-bold text-sm tracking-wider">CLASSES 3-8</div>
          </div>

          {/* Card 4 */}
          <div className="group relative h-[400px] bg-gradient-to-b from-white/10 to-white/5 rounded-[30px] p-8 border border-white/10 backdrop-blur-xl transition-all duration-500 transform hover:rotate-y-12 hover:scale-105 hover:shadow-[0_0_50px_rgba(234,179,8,0.3)]">
             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 rounded-[30px] transition-opacity"></div>
             <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-white" />
             </div>
             <h3 className="text-2xl font-bold mb-4">English & Comms</h3>
             <ul className="space-y-3 text-slate-300">
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Public Speaking</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Creative Writing</li>
               <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>Vocabulary</li>
             </ul>
             <div className="absolute bottom-8 left-8 text-yellow-300 font-bold text-sm tracking-wider">CLASSES 3-8</div>
          </div>
        </div>
      </div>

      {/* Features Stripe - Glassmorphism */}
      <div className="relative z-10 py-20 bg-white/5 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
               <div className="inline-block p-4 rounded-full bg-blue-500/20 text-blue-400 mb-2">
                 <Smartphone className="h-8 w-8" />
               </div>
               <h4 className="text-xl font-bold text-white">Mobile Learning</h4>
               <p className="text-slate-400">Access classes from any device, anywhere, anytime.</p>
            </div>
            <div className="space-y-4">
               <div className="inline-block p-4 rounded-full bg-purple-500/20 text-purple-400 mb-2">
                 <Shield className="h-8 w-8" />
               </div>
               <h4 className="text-xl font-bold text-white">Safe Environment</h4>
               <p className="text-slate-400">Child-safe platform with curated, age-appropriate content.</p>
            </div>
            <div className="space-y-4">
               <div className="inline-block p-4 rounded-full bg-pink-500/20 text-pink-400 mb-2">
                 <Star className="h-8 w-8" />
               </div>
               <h4 className="text-xl font-bold text-white">Expert Tutors</h4>
               <p className="text-slate-400">Learn from the top 1% of educators worldwide.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing / Offer - 3D Dashboard Style */}
      <div className="relative z-10 py-24 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] rounded-[40px] p-1 border border-white/10 shadow-2xl">
           <div className="bg-[#0f0f0f] rounded-[36px] p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-[gradient_2s_linear_infinite]"></div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Limited Time Offer</h3>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6">
                ₹999<span className="text-2xl text-slate-500 font-normal">/mo</span>
              </div>
              <p className="text-slate-400 mb-8">Unlock all subjects (Math, Science, English, Coding)</p>
              
              <Link to="/contact" className="inline-block px-12 py-5 rounded-2xl bg-white text-black font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                Join Now
              </Link>
           </div>
        </div>
      </div>

      {/* 3D Footer Contact */}
      <div className="relative z-10 bg-black pt-20 pb-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
           <div className="mb-12 flex items-center justify-center gap-2">
             <BookOpen className="h-8 w-8 text-purple-500" />
             <span className="text-3xl font-bold text-white">Decode__sriraj</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
              <a href="tel:917013790198" className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Call Us</div>
                  <div className="text-lg font-bold text-white">917013790198</div>
                </div>
              </a>

              <a href="mailto:decodesriraj11@gmail.com" className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Email Us</div>
                  <div className="text-lg font-bold text-white">decodesriraj11@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/917013790198" className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp</div>
                  <div className="text-lg font-bold text-white">Chat Now</div>
                </div>
              </a>
           </div>

           <div className="text-slate-500 text-sm">
             &copy; {new Date().getFullYear()} Decode__sriraj. 3D Educational Experience.
           </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;