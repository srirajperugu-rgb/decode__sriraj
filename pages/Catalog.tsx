import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import { BOOKS } from '../constants';
import BookCard from '../components/BookCard';
import { FilterState } from '../types';

const Catalog: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    language: '',
    level: '',
  });

  const languages = Array.from(new Set(BOOKS.map(b => b.language)));
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const filteredBooks = useMemo(() => {
    return BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(filters.search.toLowerCase()) || 
                            book.author.toLowerCase().includes(filters.search.toLowerCase());
      const matchesLang = filters.language ? book.language === filters.language : true;
      const matchesLevel = filters.level ? book.level === filters.level : true;
      return matchesSearch && matchesLang && matchesLevel;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Books Catalog</h1>
            <p className="text-slate-500 mt-1">Explore {BOOKS.length} curated titles for developers.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
              value={filters.search}
              onChange={(e) => setFilters(prev => ({...prev, search: e.target.value}))}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold">
                <Filter className="h-5 w-5" /> Filters
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Language</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="language" 
                        className="text-blue-600 focus:ring-blue-500"
                        checked={filters.language === ''}
                        onChange={() => setFilters(prev => ({...prev, language: ''}))}
                      />
                      <span className="text-sm text-slate-600">All Languages</span>
                    </label>
                    {languages.map(lang => (
                      <label key={lang} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="language" 
                          className="text-blue-600 focus:ring-blue-500"
                          checked={filters.language === lang}
                          onChange={() => setFilters(prev => ({...prev, language: lang}))}
                        />
                        <span className="text-sm text-slate-600">{lang}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-gray-100"></div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Difficulty</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        type="radio" 
                        name="level" 
                        className="text-blue-600 focus:ring-blue-500"
                        checked={filters.level === ''}
                        onChange={() => setFilters(prev => ({...prev, level: ''}))}
                      />
                      <span className="text-sm text-slate-600">Any Level</span>
                    </label>
                    {levels.map(level => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="level" 
                          className="text-blue-600 focus:ring-blue-500"
                          checked={filters.level === level}
                          onChange={() => setFilters(prev => ({...prev, level: level}))}
                        />
                        <span className="text-sm text-slate-600">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:w-3/4">
            {filteredBooks.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-gray-200">
                <p className="text-lg text-slate-500">No books found matching your criteria.</p>
                <button 
                  onClick={() => setFilters({search: '', language: '', level: ''})}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Catalog;
