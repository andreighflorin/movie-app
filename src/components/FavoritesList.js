import './List.css';
import {useData} from '../hooks/useData';

export default function FavoritesList() {

  const {favoritesList, updateFavoritesList} = useData();

  const handleClickRemove = (e, index) => {
    e.preventDefault();
    const updatedList = favoritesList.splice(index,1);
    const result = favoritesList.filter(elem => elem !== updatedList);
    updateFavoritesList(result);
  }

  return (
    <div className="grid-container">
      {favoritesList.map((item,index) => (
        item.map(movie => (
          <div key={movie.id} className="card" id={movie.id}>
            <img className="card-img" src = {'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title"><strong>{movie.title}</strong></h5>
              <p className="card-text">{movie.release_date}</p>
              <a href="#" className="btn btn-remove" onClick = {e => handleClickRemove(e, index)}>Remove from favorites</a>
            </div>
          </div>
        ))
      ))}
    </div>
  );
}