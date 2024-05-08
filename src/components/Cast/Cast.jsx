import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(cast => setCast(cast));
  }, [movieId]);
  return (
    <ul>
      {cast?.map(({ profile_path, name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt="Actor"
              className={styles.image}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Cast;
