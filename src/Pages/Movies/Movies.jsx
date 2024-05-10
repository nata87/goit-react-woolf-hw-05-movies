import { searchMovie } from 'api';
import { useEffect, useRef, useState } from 'react';
import styles from './Movies.module.css';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    searchMovie(search).then(res => {
      setResult(res);
    });
  }, [search]);

  const inputRef = useRef(null);
  return (
    <section className={styles.section}>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSearch(inputRef.current.value);
          inputRef.current.value = '';
        }}
      >
        <input className={styles.input} ref={inputRef} />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      <div>{result.length ? <MovieList movies={result} /> : null}</div>
    </section>
  );
};

export default Movies;
