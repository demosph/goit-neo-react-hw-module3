import { useEffect, useState } from 'react';
import style from './SearchBox.module.css';

const SearchBox = ({ onSearch }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onSearch(filter);
  }, [filter, onSearch]);

  return (
    <div className={style.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;