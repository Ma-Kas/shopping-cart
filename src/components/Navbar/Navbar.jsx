import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = ({ onCartClick }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.storeName}>
        Coffee <span className={styles.storeNameHighlight}>KooHi</span>
      </div>
      <nav className={styles.pagesNavigation}>
        <a href='' className={`${styles.home} ${styles.pageLink}`}>
          Home
        </a>
        <a href='' className={`${styles.store} ${styles.pageLink}`}>
          Our Products
        </a>
        <a href='' className={`${styles.about} ${styles.pageLink}`}>
          About Us
        </a>
      </nav>

      <div className={styles.searchAndCart}>
        <form className={styles.searchbarForm}>
          <img src='/src/assets/search.svg' className={styles.searchIcon} />
          <input
            type='search'
            className={styles.searchbar}
            name={styles.searchbar}
            id={styles.searchbar}
            placeholder='What are you looking for?'
            autoComplete='off'
          />
        </form>
        <button type='button' className={styles.btnCart} onClick={onCartClick}>
          <img src='./src/assets/cart.svg' className={styles.iconCart} />
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onCartClick: PropTypes.func.isRequired,
};

export default Navbar;
