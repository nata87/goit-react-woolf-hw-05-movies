import { getMovies } from 'api';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies.length && <MovieList movies={movies} />}
    </>
  );
};

export default Home;
