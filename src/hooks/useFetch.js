import {useEffect} from 'react';
import {useData} from '../hooks/useData';

const useFetch = (url) => {

  const {updateMovies, updatePending, updateError} = useData();

  useEffect(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        updatePending(false);
        updateMovies(data);
        updateError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        updateError(err.message);
        updatePending(false);
      })
  }, [url])

}
 
export default useFetch;