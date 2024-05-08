import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <button style={{ marginBottom: '30px' }}>
      <Link style={{ textDecoration: 'none' }} to="/">
        {'<-- Go back'}
      </Link>
    </button>
  );
};

export default BackButton;
