import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center relative">
      <input className="px-10 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-300 lg:text-sm text-xs" type="text" placeholder="Search" />
      <svg className="w-6 h-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default SearchBar;
