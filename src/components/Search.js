import './Search.css';
import {useData} from '../hooks/useData';
import {useEffect} from 'react';

export default function Search() {

  const {data, searchTerm, updateSearchTerm, updateSearchResult} = useData();

  useEffect(() => {
    if (searchTerm.trim()) {
      const result = data.items.map(movie => [{
        title: movie.title,
        id: movie.id,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      }]).filter(item => item[0].title.toLowerCase().includes(searchTerm));
      updateSearchResult(result);
    } else {
      updateSearchTerm('');
      updateSearchResult('');
    }
  }, [searchTerm]);

  const handleChange = e => {
    const searchTerm = e.target.value;
    updateSearchTerm(searchTerm);
  };

  return (
  <>
    <form id="search">
      <input type="text" placeholder="Search" name="search" value={searchTerm} onChange={e => handleChange(e)}/>
    </form>
    {searchTerm && <a href="#" className="reset" onClick={() => {updateSearchTerm('')}}>Reset form</a>}
  </>
  )
  
}