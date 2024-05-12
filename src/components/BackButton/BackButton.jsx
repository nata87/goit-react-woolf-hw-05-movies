import { useLocation, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from ?? location.state?.from.pathname ?? '/';
  return (
    <button style={{ marginBottom: '30px' }} onClick={() => navigate(from)}>
      {'<-- Go back'}
    </button>
  );
};

export default BackButton;
