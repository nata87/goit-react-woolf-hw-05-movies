import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ options }) => {
  return (
    <header className={styles.header}>
      {options.map(name => {
        return (
          <Link
            to={`/${name === 'Home' ? '' : name.toLowerCase()}`}
            className={styles.link}
            key={name}
          >
            {name}
          </Link>
        );
      })}
    </header>
  );
};

export default Header;
