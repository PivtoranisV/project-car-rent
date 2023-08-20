'use client';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import SearchMake from './SearchMake';

const Search = () => {
  const handleSubmit = () => {};
  const [make, setMake] = useState('');
  return (
    <form onSubmit={handleSubmit} className="flex gap-1">
      <SearchMake make={make} setMake={setMake} />
      <button>
        <FcSearch className="text-3xl" />
      </button>
    </form>
  );
};

export default Search;
