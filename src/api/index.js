import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'da789e4046025628314fd46c966ce59e';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: KEY };

export const getMovies = async () => {
  let movies = await axios
    .get('/trending/movie/day')
    .then(({ data }) => {
      return data.results;
    })
    .catch(err => console.log(err));

  return movies;
};

export const getMovie = async id => {
  let movie = await axios
    .get(`/movie/${id}`)
    .then(({ data }) => {
      return data;
    })
    .catch(err => console.log(err));
  return movie;
};
export const getMovieCredits = async id => {
  const credits = await axios
    .get(`/movie/${id}/credits`)
    .then(({ data }) => {
      return data.cast;
    })
    .catch(err => console.log(err));
  return credits;
};

export const getMovieReviews = async id => {
  const reviews = await axios
    .get(`/movie/${id}/reviews`)
    .then(({ data }) => {
      return data.results;
    })
    .catch(err => console.log(err));
  return reviews;
};

export const searchMovie = async search => {
  const movie = await axios
    .get(`/search/movie?query=${search}`)
    .then(({ data }) => {
      return data.results;
    })
    .catch(err => console.log(err));
  return movie;
};
