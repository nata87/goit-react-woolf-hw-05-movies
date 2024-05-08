import MovieDetails from 'Pages/Movie/MovieDetails';
import Home from '../Pages/Home/Home';

import { Route, Routes, Outlet } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Movies from 'Pages/Movies/Movies';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route index element={<Outlet />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default Router;
