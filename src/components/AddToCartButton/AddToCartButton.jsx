import PropTypes from 'prop-types';

import styles from './AddToCartButton.module.css';
import cartIcon from '/src/assets/cart.svg';

const AddToCartButton = ({ onClick }) => {
  return (
    <button type='button' className={styles.btn} onClick={onClick}>
      <img src={cartIcon} className={styles.btnIcon} />
    </button>
  );
};

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToCartButton;
