import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Zap, BookOpen, Code, Layers, Globe } from 'lucide-react';
import { BOOKS, TESTIMONIALS } from '../constants';
import BookCard from '../components/BookCard';

const Home: React.FC = () => {
  const trendingBooks = BOOKS.filter(book => book.isTrending);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle 3D Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 50; // Sensitivity
      const y = (e.clientY - innerHeight / 2) / 50;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[#020617] overflow-hidden perspective-1000"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)'
      }}
    >
      {/* === SNAKE MOTION BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path 
             d="M0,50 C20,0 50,100 100,50" 
             fill="none" 
             stroke="url(#grad1)" 
             strokeWidth="0.2" 
             className="animate-snake-path"
           />
           <path 
             d="M0,30 C30,80 70,0 100,70" 
             fill="none" 
             stroke="url(#grad2)" 
             strokeWidth="0.2" 
             className="animate-snake-path"
             style={{ animationDelay: '-5s' }}
           />
           <defs>
             <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
               <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
               <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
             </linearGradient>
             <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
               <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
               <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
               <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
             </linearGradient>
           </defs>
        </svg>
      </div>

      {/* === HERO SECTION: 3D VIRTUAL HUB === */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-32 px-4">
        <div 
          className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center preserve-3d transition-transform duration-100 ease-out"
          style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
        >
          
          {/* 3D Text & CTA */}
          <div className="space-y-10" style={{ transform: 'translateZ(40px)' }}>
             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-panel border-l-4 border-blue-500 animate-float-snake">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <span className="text-blue-300 font-bold tracking-wide text-sm uppercase">Top Coding Resources</span>
             </div>

             <h1 className="text-5xl md:text-7xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-slate-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Level Up Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 filter drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                   Coding Skills
                </span>
             </h1>

             <p className="text-xl text-slate-400 max-w-lg leading-relaxed border-l border-slate-700 pl-6">
                Explore our top categories: Python, Java, C, C++, Web Development, and DSA. Start your journey to mastery today.
             </p>

             <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link 
                  to="/catalog" 
                  className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:scale-105 transition-transform"
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <span className="relative z-10 flex items-center gap-2">Buy Now <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform"/></span>
                </Link>
                <Link 
                  to="/catalog" 
                  className="px-8 py-4 glass-panel text-white font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center"
                >
                  View Books
                </Link>
             </div>
          </div>

          {/* 3D Book Mockup Assembly */}
          <div className="relative flex justify-center lg:justify-end" style={{ transform: 'translateZ(80px)' }}>
             <div className="relative w-[350px] h-[450px] preserve-3d animate-float-snake" style={{ animationDuration: '6s' }}>
                {/* Floating Particles */}
                <div className="absolute -top-20 -left-20 w-32 h-32 bg-blue-600/30 rounded-full blur-[60px] animate-pulse"></div>
                <div className="absolute top-1/2 -right-20 w-40 h-40 bg-purple-600/30 rounded-full blur-[60px] animate-pulse delay-700"></div>

                {/* 3D Book Object (CSS Constructed) */}
                <div className="w-full h-full relative preserve-3d group cursor-pointer transition-transform duration-500 hover:rotate-y-[-15deg] shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-r-2xl">
                   {/* Front Cover */}
                   <div className="absolute inset-0 bg-slate-900 rounded-r-2xl overflow-hidden border border-white/10 z-20 backface-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop" 
                        alt="Coding Books" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/10"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Premium Edition</div>
                         <div className="text-2xl font-bold text-white">Master Class Series</div>
                      </div>
                   </div>
                   {/* Pages / Side */}
                   <div className="absolute top-1 right-0 w-[40px] h-[99%] bg-gray-200 transform rotateY(90deg) translateZ(-20px) translateX(20px)"></div>
                   {/* Back Cover */}
                   <div className="absolute inset-0 bg-slate-800 rounded-l-2xl transform translateZ(-40px) rotateY(180deg)"></div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* === FEATURES STRIPE: 3D FLOATING PANELS === */}
      <div className="relative z-20 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Feature 1 */}
               <div className="glass-panel p-8 rounded-3xl flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                     <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Expert Selected</h3>
                     <p className="text-sm text-slate-400">Hand-picked for quality learning</p>
                  </div>
               </div>
               {/* Feature 2 */}
               <div className="glass-panel p-8 rounded-3xl flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300 delay-100">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                     <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Instant Access</h3>
                     <p className="text-sm text-slate-400">Digital downloads available instantly</p>
                  </div>
               </div>
               {/* Feature 3 */}
               <div className="glass-panel p-8 rounded-3xl flex items-center gap-6 transform hover:-translate-y-2 transition-transform duration-300 delay-200">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                     <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div>
                     <h3 className="text-xl font-bold text-white">Comprehensive</h3>
                     <p className="text-sm text-slate-400">From Beginner to Advanced</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* === TRENDING BOOKS: 3D GRID === */}
      <div className="relative z-20 py-32">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-16">
               <div style={{ transform: 'translateZ(20px)' }}>
                  <h2 className="text-4xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Trending Books</h2>
                  <p className="text-lg text-slate-400">Most popular choices for Python, Java, C++, and Web Dev.</p>
               </div>
               <Link to="/catalog" className="glass-panel px-6 py-3 rounded-full text-blue-300 font-bold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                  View All <ArrowRight className="h-4 w-4" />
               </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
               {trendingBooks.slice(0, 4).map((book, idx) => (
                  <div 
                    key={book.id} 
                    className="group relative preserve-3d transition-all duration-500 hover:rotate-x-2 hover:translate-y-[-10px]"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                     {/* Holographic Base Effect for Card */}
                     <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     
                     {/* Actual Book Card Component Wrapper */}
                     <div className="relative z-10 h-full rounded-2xl overflow-hidden border border-white/5 bg-[#0f172a]/80 backdrop-blur-sm shadow-2xl">
                        <BookCard book={book} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* === TESTIMONIALS: 3D GLASS CAROUSEL === */}
      <div className="relative z-20 py-32 bg-[#0f172a]/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-center text-white mb-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
               Community Feedback
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 perspective-1000">
               {TESTIMONIALS.map((t, idx) => (
                  <div 
                     key={t.id} 
                     className="glass-panel p-10 rounded-[30px] relative transform transition-all duration-700 hover:scale-105 hover:-translate-y-4"
                  >
                     {/* Quote Icon */}
                     <div className="absolute -top-6 -left-4 bg-blue-600 p-3 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.6)]">
                        <Star className="h-6 w-6 text-white fill-white" />
                     </div>
                     
                     <p className="text-lg text-slate-300 italic mb-8 leading-relaxed relative z-10">
                        "{t.text}"
                     </p>
                     
                     <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                           {t.name.charAt(0)}
                        </div>
                        <div>
                           <h4 className="font-bold text-white">{t.name}</h4>
                           <p className="text-xs text-blue-300 uppercase tracking-wider">{t.role}</p>
                        </div>
                     </div>

                     {/* Glow Effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-[30px] pointer-events-none"></div>
                  </div>
               ))}
            </div>
         </div>
      </div>

    </div>
  );
};

export default Home;