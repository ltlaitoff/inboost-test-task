import { ChangeEvent, useState } from 'react';

function SearchBox() {
  const [searchValue, setSearchValue] = useState('');

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="py-2">
      <input
        className="h-full px-3 text-slate-600 rounded-md hover:border-2 hover:border-purple-400"
        placeholder="Search"
        value={searchValue}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
