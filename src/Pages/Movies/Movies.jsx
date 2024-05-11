import { searchMovie } from 'api';
import { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [result, setResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const search = searchParams.get('query') || '';

  useEffect(() => {
    search &&
      searchMovie(search).then(res => {
        setResult(res);
      });
  }, [search]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    query.length > 0 && setSearchParams({ query: query });
  };

  return (
    <section className={styles.section}>
      <form onSubmit={handleSubmit}>
        <input className={styles.input} onChange={handleChange} />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      <div>{result.length ? <MovieList movies={result} /> : null}</div>
    </section>
  );
};

export default Movies;
