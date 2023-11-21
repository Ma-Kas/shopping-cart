import { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const Button = memo(function Button({ onClick, buttonText }) {
  return (
    <button type='button' className={styles.btn} onClick={onClick}>
      {buttonText}
    </button>
  );
});

Button.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonIcon: false,
};

export default Button;
