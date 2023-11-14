import PropTypes from 'prop-types';
import styles from './AddToCartButton.module.css';

const AddToCartButton = ({ onClick }) => {
  return (
    <button type='button' className={styles.btn} onClick={onClick}>
      <img src='./src/assets/cart.svg' className={styles.btnIcon} />
    </button>
  );
};

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddToCartButton;
