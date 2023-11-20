import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import * as CONFIG from '../../data/configValues.json';

import styles from './Navbar.module.css';
import searchIcon from '/src/assets/search.svg';
import hamburgerIcon from '/src/assets/hamburger.svg';
import cartIcon from '/src/assets/cart.svg';

const Navbar = ({ cartData, onCartClick, onBurgerClick }) => {
  const currentLocation = useLocation().pathname;

  return (
    <nav className={styles.navbar}>
      <div className={styles.storeName}>
        Coffee <span className={styles.storeNameHighlight}>KooHi</span>
      </div>
      <nav className={styles.pagesNavigation}>
        <Link
          to={CONFIG.homePath}
          className={
            currentLocation === CONFIG.homePath || currentLocation === '/'
              ? `${styles.home} ${styles.currentPageLink}`
              : `${styles.home} ${styles.pageLink}`
          }
        >
          Home
        </Link>
        <Link
          to={CONFIG.storePath}
          className={
            currentLocation === CONFIG.storePath
              ? `${styles.store} ${styles.currentPageLink}`
              : `${styles.store} ${styles.pageLink}`
          }
        >
          Our Products
        </Link>
        <Link
          to={CONFIG.aboutPath}
          className={
            currentLocation === CONFIG.aboutPath
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
          <img src={searchIcon} className={styles.searchIcon} />
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
          onClick={(e) => e.preventDefault()}
        >
          <img src={searchIcon} className={styles.iconCart} />
        </button>

        <button
          type='button'
          className={styles.btnHamburger}
          onClick={onBurgerClick}
        >
          <img src={hamburgerIcon} className={styles.iconCart} />
        </button>

        <button type='button' className={styles.btnCart} onClick={onCartClick}>
          <img src={cartIcon} className={styles.iconCart} />
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
  onBurgerClick: PropTypes.func.isRequired,
};

export default Navbar;
