import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ cartData, onCartClick }) => {
  const currentLocation = useLocation().pathname;

  return (
    <nav className={styles.navbar}>
      <div className={styles.storeName}>
        Coffee <span className={styles.storeNameHighlight}>KooHi</span>
      </div>
      <nav className={styles.pagesNavigation}>
        <Link
          to='/home'
          className={
            currentLocation === '/home' || currentLocation === '/'
              ? `${styles.home} ${styles.currentPageLink}`
              : `${styles.home} ${styles.pageLink}`
          }
        >
          Home
        </Link>
        <Link
          to='/store'
          className={
            currentLocation === '/store'
              ? `${styles.store} ${styles.currentPageLink}`
              : `${styles.store} ${styles.pageLink}`
          }
        >
          Our Products
        </Link>
        <Link
          to='/about'
          className={
            currentLocation === '/about'
              ? `${styles.about} ${styles.currentPageLink}`
              : `${styles.about} ${styles.pageLink}`
          }
        >
          About Us
        </Link>
      </nav>

      <div className={styles.searchAndCart}>
        <form
          className={styles.searchbarForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
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
        <button
          type='button'
          className={styles.btnSearch}
          onClick={() => console.log('search')}
        >
          <img src='./src/assets/search.svg' className={styles.iconCart} />
        </button>

        <button
          type='button'
          className={styles.btnHamburger}
          onClick={() => console.log('burger')}
        >
          <img src='./src/assets/hamburger.svg' className={styles.iconCart} />
        </button>

        <button type='button' className={styles.btnCart} onClick={onCartClick}>
          <img src='./src/assets/cart.svg' className={styles.iconCart} />
          {cartData.length !== 0 && (
            <div className={styles.fullCartIndicator}></div>
          )}
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartData: PropTypes.array.isRequired,
  onCartClick: PropTypes.func.isRequired,
};

export default Navbar;
