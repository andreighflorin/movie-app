import './App.css';
import useFetch from './hooks/useFetch';
import {useData} from './hooks/useData';
import Spinner from './components/Spinner';
import Wrapper from './components/Wrapper';

export default function App() {

  let apiKey = '4190f01996e8472a76bc2161774ca589';
  let url = `https://api.themoviedb.org/3/list/1?api_key=${apiKey}`;
  useFetch(url);

  const {data, isPending, error} = useData();

  return (
    <div className="App">
      {error && <div>{error}</div>}
      {isPending && <Spinner />}
      {data && <Wrapper />}
    </div>
  );
}
