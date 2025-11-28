import React, { useState } from 'react';
import { Trash2, Lock, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    openCheckout: (items: any[], total: number) => void;
  }
}

const Cart: React.FC = () => {
  const { items, removeFromCart, cartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    if (window.openCheckout) {
      window.openCheckout(items, cartTotal);
    } else {
      // Fallback if script didn't load
      setIsCheckingOut(true);
    }
  };

  if (items.length === 0 && !isCheckingOut) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added any books yet.</p>
        <Link to="/catalog" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Browse Catalog
        </Link>
      </div>
    );
  }

  if (isCheckingOut) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Order Confirmed!</h2>
          <p className="text-slate-500 mb-6">Thank you for your purchase. A download link has been sent to your email.</p>
          <button 
            onClick={() => {
              clearCart();
              window.location.href = '/';
            }}
            className="w-full bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Items List */}
          <div className="lg:w-2/3 space-y-4">
            {items.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-center gap-6">
                <img src={item.image} alt={item.title} className="w-16 h-24 object-contain rounded shadow-sm" />
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.author}</p>
                  <p className="text-sm text-slate-500 mt-1">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-slate-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-2 hover:text-red-700 flex items-center gap-1 justify-end"
                  >
                    <Trash2 className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax (Estimated)</span>
                  <span>₹{(cartTotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between font-bold text-xl text-slate-900">
                  <span>Total</span>
                  <span>₹{(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
              >
                Checkout <Lock className="h-4 w-4" />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-slate-400">
                <CreditCard className="h-6 w-6" />
                <span className="text-xs">Secure SSL Encryption</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;