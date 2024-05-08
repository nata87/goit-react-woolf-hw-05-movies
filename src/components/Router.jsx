import { Suspense, lazy } from 'react';
// import MovieDetails from 'Pages/Movie/MovieDetails';

import { Route, Routes, Outlet } from 'react-router-dom';
import Spiner from './Spiner/Spiner';
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('../Pages/Movies/Movies'));
const Home = lazy(() => import('../Pages/Home/Home'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spiner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/movies"
        element={
          <Suspense fallback={<Spiner />}>
            <Movies />
          </Suspense>
        }
      />
      <Route
        path="/movies/:movieId"
        element={
          <Suspense fallback={<Spiner />}>
            <MovieDetails />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Spiner />}>
              <Outlet />
            </Suspense>
          }
        />
        <Route
          path="cast"
          element={
            <Suspense fallback={<Spiner />}>
              <Cast />
            </Suspense>
          }
        />
        <Route
          path="reviews"
          element={
            <Suspense fallback={<Spiner />}>
              <Reviews />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
