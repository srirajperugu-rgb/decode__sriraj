import React, { useState, useEffect, useRef } from 'react';
import { Mic, X, MoreHorizontal, Volume2, ShoppingBag } from 'lucide-react';
import { LexaService } from '../services/lexaService';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { BOOKS } from '../constants';

const LexaWidget: React.FC = () => {
  const [state, setState] = useState('IDLE'); // IDLE, LISTENING, PROCESSING, SPEAKING
  const [transcript, setTranscript] = useState('');
  const [reply, setReply] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const lexaRef = useRef<LexaService | null>(null);

  useEffect(() => {
    // Initialize Lexa Service
    lexaRef.current = new LexaService({
      onStateChange: (s) => setState(s),
      onTranscriptChange: (t) => setTranscript(t),
      onReplyChange: (t) => setReply(t),
      onNavigate: (path) => navigate(path),
      onAddToCart: (bookId) => {
        const book = BOOKS.find(b => b.id === bookId);
        if (book) addToCart(book);
      },
      onInstantBuy: (bookId) => {
        const book = BOOKS.find(b => b.id === bookId);
        if (book) {
          addToCart(book);
          navigate('/cart');
        }
      }
    });

    return () => {
      lexaRef.current?.stopListening();
    };
  }, [navigate, addToCart]);

  const toggleListening = () => {
    if (state === 'LISTENING') {
      lexaRef.current?.stopListening();
    } else {
      setIsOpen(true);
      lexaRef.current?.startListening();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => { setIsOpen(true); lexaRef.current?.speak("Hi, I'm Lexa. How can I help?"); }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_4px_20px_rgba(79,70,229,0.5)] flex items-center justify-center text-white hover:scale-110 transition-transform group"
        aria-label="Open Voice Assistant"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
        <Mic className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Transcript Bubble */}
      {(transcript || reply) && (
        <div className="bg-white/90 backdrop-blur-md border border-white/20 text-slate-800 p-4 rounded-2xl rounded-tr-none shadow-xl max-w-[280px] animate-fade-in-up">
          <p className="text-sm font-medium">
            {state === 'SPEAKING' ? (
               <span className="text-blue-600 flex items-center gap-2"><Volume2 className="h-3 w-3" /> Lexa</span>
            ) : (
               <span className="text-slate-500">You</span>
            )}
          </p>
          <p className="text-base leading-snug mt-1">
            {state === 'SPEAKING' ? reply : transcript || "Listening..."}
          </p>
        </div>
      )}

      {/* Main Widget */}
      <div className="relative w-72 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${state === 'IDLE' ? 'bg-slate-500' : 'bg-green-500 animate-pulse'}`}></div>
            <span className="text-white font-bold text-sm tracking-wide">LEXA</span>
          </div>
          <button onClick={() => { setIsOpen(false); lexaRef.current?.stopListening(); }} className="text-slate-400 hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Visualizer Area */}
        <div className="h-24 flex items-center justify-center relative bg-gradient-to-b from-transparent to-black/20">
          
          {state === 'IDLE' && (
            <p className="text-slate-500 text-xs">Tap mic to speak</p>
          )}

          {state === 'LISTENING' && (
            <div className="relative">
               <div className="lexa-pulse absolute inset-0"></div>
               <div className="relative z-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_#3b82f6]">
                 <Mic className="h-6 w-6 text-white" />
               </div>
            </div>
          )}

          {state === 'PROCESSING' && (
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
            </div>
          )}

          {state === 'SPEAKING' && (
            <div className="flex items-end gap-1 h-8">
              {[1,2,3,4,5].map(i => (
                 <div key={i} className="w-1.5 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full lexa-wave-bar" style={{ animationDuration: `${0.5 + Math.random() * 0.5}s` }}></div>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="p-4 grid grid-cols-3 gap-2">
          <button 
             onClick={toggleListening}
             className={`col-span-2 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
               state === 'LISTENING' 
                 ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                 : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20'
             }`}
          >
            {state === 'LISTENING' ? 'Stop Listening' : 'Tap to Speak'}
          </button>
          
          <button className="col-span-1 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/5 transition-colors">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Prompts */}
        <div className="px-4 pb-4">
           <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-bold">Try saying:</p>
           <div className="flex flex-wrap gap-2">
              <span onClick={() => lexaRef.current?.processCommand("Go to Catalog")} className="cursor-pointer text-xs bg-white/5 px-2 py-1 rounded-md text-slate-300 hover:bg-white/10 hover:text-white transition-colors">"Go to catalog"</span>
              <span onClick={() => lexaRef.current?.processCommand("Show Python book")} className="cursor-pointer text-xs bg-white/5 px-2 py-1 rounded-md text-slate-300 hover:bg-white/10 hover:text-white transition-colors">"Show Python book"</span>
              <span onClick={() => lexaRef.current?.processCommand("Open Cart")} className="cursor-pointer text-xs bg-white/5 px-2 py-1 rounded-md text-slate-300 hover:bg-white/10 hover:text-white transition-colors">"Open cart"</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default LexaWidget;