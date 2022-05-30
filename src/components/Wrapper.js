import './Wrapper.css';
import {useData} from '../hooks/useData';
import Menu from '../components/Menu';
import Search from '../components/Search';
import MoviesList from '../components/MoviesList';
import FavoritesList from '../components/FavoritesList';

export default function Wrapper() {

  const {showAll, showFavorites} = useData();

  return (
    <>
      <Menu />
      {showAll && <Search />}
      {showAll && <MoviesList />}
      {showFavorites && <FavoritesList />}
    </>
  );
}