import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Searchbar from '../../components/Searchbar/Searchbar';
import styles from './Burger.module.css';

const Burger = ({ isBurgerOpen, toggleBurger }) => {
  const navigate = useNavigate();
  const currentLocation = useLocation().pathname;

  const handleNavigation = (targetPath) => {
    if (targetPath === currentLocation) {
      toggleBurger();
    } else {
      navigate(targetPath);
      toggleBurger();
    }
  };

  return (
    <div
      className={
        isBurgerOpen ? `${styles.burger}` : `${styles.burger} ${styles.hidden}`
      }
    >
      <div className={styles.burgerPopout}>
        <header className={styles.burgerHeader}>
          <h2 className={styles.burgerHeading}>Menu</h2>
          <button type='button' onClick={toggleBurger}>
            <img src='/src/assets/close.svg' className={styles.closeIcon} />
          </button>
        </header>
        <section className={styles.burgerMenuItems}>
          <div className={styles.burgerItemContainer}>
            <div
              className={styles.itemName}
              onClick={() => handleNavigation('/home')}
            >
              Home
            </div>
          </div>
          <div className={styles.burgerItemContainer}>
            <div
              className={styles.itemName}
              onClick={() => handleNavigation('/store')}
            >
              Our Products
            </div>
          </div>
          <div className={styles.burgerItemContainer}>
            <div
              className={styles.itemName}
              onClick={() => handleNavigation('/about')}
            >
              About Us
            </div>
          </div>
          <div className={styles.burgerItemContainer}>
            <Searchbar></Searchbar>
          </div>
        </section>
      </div>
    </div>
  );
};

Burger.propTypes = {
  isBurgerOpen: PropTypes.bool.isRequired,
  toggleBurger: PropTypes.func.isRequired,
};

export default Burger;
