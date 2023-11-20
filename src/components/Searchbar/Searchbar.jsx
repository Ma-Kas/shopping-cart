import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = (style) => {
  return (
    <form
      style={style}
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
  );
};

Searchbar.propTypes = {
  style: PropTypes.string,
};

Searchbar.defaultProps = {
  style: '',
};

export default Searchbar;
