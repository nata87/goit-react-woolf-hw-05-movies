import { getMovies } from 'api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    getMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
