import { getMovie } from 'api';
import BackButton from 'components/BackButton/BackButton';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getMovie(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <>
      <BackButton />
      {movie && (
        <>
          <section className={styles.section}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Poster"
            />
            <div className={styles.info}>
              <h1 className={styles.title}>{movie.title}</h1>
              <p>User score: {movie.vote_average}</p>
              <div>
                <span className={styles.title}>Overview</span>
                <p>{movie.overview}</p>
              </div>
              <div>
                <span className={styles.title}>Genres</span>
                <p>
                  {movie.genres.map(({ name }) => {
                    return name + ' ';
                  })}
                </p>
              </div>
            </div>
          </section>
          <section className={`${styles.section} ${styles.details}`}>
            Additional information:
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Review</Link>
              </li>
            </ul>
          </section>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;

// {
//     "adult": false,
//     "backdrop_path": "/uv2twFGMk2qBdyJBJAVcrpRtSa9.jpg",
//     "belongs_to_collection": null,
//     "budget": 50000000,
//     "genres": [
//         {
//             "id": 10752,
//             "name": "War"
//         },
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         }
//     ],
//     "homepage": "https://a24films.com/films/civil-war",
//     "id": 929590,
//     "imdb_id": "tt17279496",
//     "origin_country": [
//         "GB"
//     ],
//     "original_language": "en",
//     "original_title": "Civil War",
//     "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
//     "popularity": 620.535,
//     "poster_path": "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
//     "production_companies": [
//         {
//             "id": 284,
//             "logo_path": "/6a26if3IKy7mlrQuGHHVp6ufQtF.png",
//             "name": "DNA Films",
//             "origin_country": "GB"
//         },
//         {
//             "id": 142269,
//             "logo_path": "/ggrWFqk5mPMks0vE3aCy3l9e0dv.png",
//             "name": "IPR.VC",
//             "origin_country": "FI"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "FI",
//             "name": "Finland"
//         },
//         {
//             "iso_3166_1": "GB",
//             "name": "United Kingdom"
//         }
//     ],
//     "release_date": "2024-04-10",
//     "revenue": 95684707,
//     "runtime": 109,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Welcome to the frontline.",
//     "title": "Civil War",
//     "video": false,
//     "vote_average": 7.406,
//     "vote_count": 599
// }
