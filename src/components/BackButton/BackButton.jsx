import { Link, useLocation } from 'react-router-dom';

const BackButton = () => {
  const { state } = useLocation();
  return (
    <button style={{ marginBottom: '30px' }}>
      <Link style={{ textDecoration: 'none' }} to={state.from}>
        {'<-- Go back'}
      </Link>
    </button>
  );
};

export default BackButton;
