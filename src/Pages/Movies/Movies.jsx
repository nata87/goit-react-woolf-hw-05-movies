import { searchMovie } from 'api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  return (
    <section className={styles.section}>
      <div>
        <input
          className={styles.input}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button
          onClick={() =>
            searchMovie(search).then(res => {
              setResult(res);
              setSearch('');
            })
          }
          className={styles.button}
        >
          Search
        </button>
      </div>
      <div>
        {result.length ? (
          <ul>
            {result.map(({ id, title }) => {
              return (
                <li key={id}>
                  <Link to={`/movies/${id}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </section>
  );
};

export default Movies;
