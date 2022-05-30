import './List.css';
import {useData} from '../hooks/useData';

export default function MoviesList() {

  const {data, searchResult, favoritesList, updateFavoritesList} = useData();

  const handleClickAdd = e => {
    e.preventDefault();
    const id = parseInt(e.target.parentNode.parentNode.id);
    const result = data.items.map(movie => ({
      'title': movie.title,
      'id': movie.id,
      'poster_path': movie.poster_path,
      'release_date': movie.release_date})).filter(elem => (elem.id === id));
    updateFavoritesList([...favoritesList, result]);
  }
  
  return (
    <>
    <div className="grid-container">
      {!searchResult && data.items.map(movie => (
        <div key={movie.id} className="card" id={movie.id}>
          <img className="card-img" src = {'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title"><strong>{movie.title}</strong></h5>
            <p className="card-text">{movie.release_date}</p>
            <a href="#" className="btn btn-success" onClick = {e => handleClickAdd(e)}>Add to favorites</a>
          </div>
        </div>
      ))}
      {searchResult && searchResult.map(movie => (
        <div key={movie[0].id} className="card" id={movie[0].id}>
        <img className="card-img" src = {'https://image.tmdb.org/t/p/original/' + movie[0].poster_path} alt={movie.title} />
        <div className="card-body">
          <h5 className="card-title"><strong>{movie[0].title}</strong></h5>
          <p className="card-text">{movie[0].release_date}</p>
          <a href="#" className="btn btn-success" onClick = {e => handleClickAdd(e)}>Add to favorites</a>
        </div>
      </div>
      ))}
    </div>
    </>
  );
}