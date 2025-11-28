import React from 'react';
import { BookOpen, Instagram, Mail, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Decode__sriraj</span>
            </div>
            <p className="text-sm text-slate-400">
              Empowering developers with the world's best coding resources. Curated for excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/Decode__sriraj" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
              <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="hover:text-blue-400 transition-colors">Best Sellers</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog" className="hover:text-blue-400 transition-colors">Python</Link></li>
              <li><Link to="/catalog" className="hover:text-blue-400 transition-colors">Java & Spring</Link></li>
              <li><Link to="/catalog" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link to="/catalog" className="hover:text-blue-400 transition-colors">Data Science</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-xs text-slate-400 mb-3">Join 10,000+ developers getting weekly book drops.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                Subscribe <Send className="h-3 w-3" />
              </button>
            </form>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Decode__sriraj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;