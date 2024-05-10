import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const { pathname } = useLocation();

  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: pathname }}>
              {original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;
