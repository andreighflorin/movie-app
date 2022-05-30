import './Menu.css';
import {useData} from '../hooks/useData';

export default function Menu() {

  const {updateShowAll, updateShowFavorites} = useData();

  const handleClickAll = () => {
    updateShowAll(true);
    updateShowFavorites(false);
  }

  const handleClickFavourites = () => {
    updateShowAll(false);
    updateShowFavorites(true);
  }

  return (
    <div className="menu-wrapper">
      <a href="#" className="btn btn-all" onClick = {handleClickAll}>Show All Movies</a>
      <a href="#" className="btn btn-favourites" onClick = {handleClickFavourites}>Show Favourites</a>
    </div>
  )
  
}