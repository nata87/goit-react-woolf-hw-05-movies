import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './Header/Header';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-woolf-hw-05-movies">
      <Header options={['Home', 'Movies']} />
      <main style={{ padding: '50px' }}>
        <Router />
      </main>
    </BrowserRouter>
  );
};
