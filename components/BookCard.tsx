import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, Eye, Zap, Lock } from 'lucide-react';
import { Book } from '../types';
import { useCart } from '../context/CartContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(book);
    navigate('/cart');
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden transform hover:-translate-y-1">
      
      {/* Image Container - Aspect ratio 2:3 with no padding for clean fit */}
      <div className="relative aspect-[2/3] overflow-hidden bg-white">
        <img 
          src={book.image} 
          alt={book.title} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        {book.price < book.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm shadow-sm z-10">
            SALE
          </div>
        )}
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            <Link 
              to={`/book/${book.id}`}
              className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg hover:scale-110"
              title="View Details"
            >
              <Eye className="h-5 w-5" />
            </Link>
            <button 
              onClick={() => addToCart(book)}
              className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 shadow-lg hover:scale-110"
              title="Add to Cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
           <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{book.language}</span>
           <div className="flex items-center text-yellow-400 text-xs font-bold">
             <Star className="h-3 w-3 fill-current mr-1" />
             {book.rating}
           </div>
        </div>
        
        <Link to={`/book/${book.id}`} className="block group-hover:text-blue-600 transition-colors">
          <h3 className="font-bold text-slate-900 text-lg leading-snug line-clamp-2 mb-1">{book.title}</h3>
        </Link>
        <p className="text-slate-500 text-sm mb-4">by {book.author}</p>
        
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-slate-900 font-bold text-xl">₹{book.price}</span>
            <span className="text-slate-400 text-xs line-through">₹{book.originalPrice}</span>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <button 
               onClick={(e) => {
                 e.preventDefault();
                 addToCart(book);
               }}
               className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap"
            >
              Add to Cart
            </button>

            {/* 3D BUY NOW BUTTON - Updated Style */}
            <button
              onClick={handleBuyNow}
              className="
                group/btn relative
                flex-1
                h-10 px-3 rounded-lg
                bg-gradient-to-r from-blue-600 to-amber-500
                text-white text-[11px] font-bold uppercase tracking-wider
                shadow-[0_4px_0_rgb(30,58,138)]
                hover:shadow-[0_2px_0_rgb(30,58,138)] hover:translate-y-[2px]
                active:shadow-none active:translate-y-[4px]
                transition-all duration-150 ease-out
                flex items-center justify-center gap-1
                border-t border-white/20
                overflow-hidden
              "
              aria-label="Buy Now"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out"></div>
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

              <span className="relative z-10 flex items-center gap-1">
                BUY NOW <Zap className="h-3 w-3 text-yellow-200 fill-yellow-200 animate-pulse" />
              </span>
              
              {/* Info Tag */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;