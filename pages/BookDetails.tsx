import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, CheckCircle, ArrowLeft, Bot, Sparkles, Loader2, Zap, Lock, ShieldCheck } from 'lucide-react';
import { BOOKS } from '../constants';
import { useCart } from '../context/CartContext';
import { getBookInsights } from '../services/geminiService';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const book = BOOKS.find(b => b.id === id);

  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  useEffect(() => {
    if (book) {
      // Save to recently viewed
      const stored = localStorage.getItem('recentlyViewed');
      let viewed: string[] = stored ? JSON.parse(stored) : [];
      if (!viewed.includes(book.id)) {
        viewed = [book.id, ...viewed].slice(0, 5);
        localStorage.setItem('recentlyViewed', JSON.stringify(viewed));
      }
    }
  }, [book]);

  const handleGenerateInsight = async () => {
    if (!book) return;
    setLoadingAi(true);
    const insight = await getBookInsights(book);
    setAiInsight(insight);
    setLoadingAi(false);
  };

  const handleBuyNow = () => {
    if (book) {
      addToCart(book);
      navigate('/cart');
    }
  };

  if (!book) {
    return <div className="p-20 text-center">Book not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button onClick={() => navigate(-1)} className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Catalog
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Image */}
          <div className="space-y-8">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
              <img src={book.image} alt={book.title} className="w-full h-full object-contain" />
            </div>
            
            {/* Features List */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-slate-900 mb-4">What you'll get</h3>
              <ul className="space-y-3">
                {book.features.map((feat, i) => (
                  <li key={i} className="flex items-start text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
             <div className="mb-2 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{book.category}</span>
                <span className="bg-gray-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{book.level}</span>
             </div>
             
             <h1 className="text-4xl font-extrabold text-slate-900 mb-2 leading-tight">{book.title}</h1>
             <p className="text-lg text-slate-500 mb-6">by {book.author}</p>

             <div className="flex items-center gap-4 mb-8">
               <div className="flex text-yellow-400">
                 {[1,2,3,4,5].map(i => (
                   <Star key={i} className={`h-5 w-5 ${i <= Math.round(book.rating) ? 'fill-current' : 'text-gray-300'}`} />
                 ))}
               </div>
               <span className="text-slate-400 text-sm">({book.reviewsCount} reviews)</span>
             </div>

             <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-bold text-slate-900">₹{book.price}</span>
                <span className="text-xl text-slate-400 line-through">₹{book.originalPrice}</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-1 rounded">
                   {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                </span>
             </div>

             <div className="text-slate-600 leading-relaxed text-lg mb-8 whitespace-pre-line">
               {book.description}
             </div>

             {/* Buttons & 3D Purchase Info */}
             <div className="flex flex-col gap-6 mb-10">
                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => addToCart(book)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="h-5 w-5" /> Add to Cart
                    </button>
                    
                    {/* 3D BUY NOW BUTTON */}
                    <button 
                      onClick={handleBuyNow}
                      className="
                        group relative flex-1
                        bg-gradient-to-r from-blue-600 to-amber-500
                        px-8 py-4 rounded-xl 
                        font-bold text-lg text-white uppercase tracking-wide
                        shadow-[0_6px_0_rgb(30,58,138)]
                        hover:shadow-[0_3px_0_rgb(30,58,138)] hover:translate-y-[3px]
                        active:shadow-none active:translate-y-[6px]
                        transition-all duration-150 ease-out
                        flex items-center justify-center gap-2
                        border-t border-white/20
                        overflow-hidden
                      "
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                      <Zap className="h-5 w-5 text-yellow-200 fill-yellow-200 animate-pulse" />
                      <span>BUY NOW</span>
                    </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-200">
                    Download Sample
                  </button>

                  {/* 3D Purchase Info Card */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-[0_4px_0_#e2e8f0] flex items-center justify-between relative overflow-hidden group hover:translate-y-[-2px] transition-transform">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-full -mr-8 -mt-8"></div>
                    <div>
                       <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                         <ShieldCheck className="h-3 w-3" /> Instant Purchase
                       </div>
                       <div className="font-bold text-slate-900">Fast Checkout</div>
                    </div>
                    <div className="text-right">
                       <div className="text-sm text-slate-500">Total</div>
                       <div className="font-bold text-blue-600">₹{book.price}</div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                  </div>
                </div>
             </div>

             {/* AI Insights Section */}
             <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-indigo-900 font-bold text-lg">
                    <Bot className="h-6 w-6" /> AI Smart Summary
                  </div>
                  {!aiInsight && !loadingAi && (
                    <button 
                      onClick={handleGenerateInsight}
                      className="text-xs font-bold bg-indigo-600 text-white px-3 py-1.5 rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-1"
                    >
                      <Sparkles className="h-3 w-3" /> Generate
                    </button>
                  )}
                </div>
                
                {loadingAi && (
                  <div className="flex items-center gap-2 text-indigo-600 py-4">
                    <Loader2 className="h-5 w-5 animate-spin" /> Analyzing book content with Gemini...
                  </div>
                )}

                {aiInsight && (
                  <div className="text-indigo-800 text-sm leading-relaxed whitespace-pre-line animate-fade-in">
                    {aiInsight}
                  </div>
                )}
                
                {!aiInsight && !loadingAi && (
                  <p className="text-indigo-400 text-sm">Want a quick breakdown? Ask our AI agent to summarize the key takeaways for you.</p>
                )}
             </div>

          </div>
        </div>
        
        {/* Mock Reviews */}
        <div className="mt-20 border-t border-gray-100 pt-12">
           <h2 className="text-2xl font-bold text-slate-900 mb-8">Customer Reviews</h2>
           <div className="space-y-6">
              {book.reviews.length > 0 ? book.reviews.map(review => (
                <div key={review.id} className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-slate-900">{review.user}</div>
                    <div className="text-xs text-slate-400">{review.date}</div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                     {[1,2,3,4,5].map(i => <Star key={i} className={`h-3 w-3 ${i <= review.rating ? 'fill-current' : 'text-gray-200'}`} />)}
                  </div>
                  <p className="text-slate-600">{review.comment}</p>
                </div>
              )) : (
                <p className="text-slate-500 italic">No reviews yet for this edition.</p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;