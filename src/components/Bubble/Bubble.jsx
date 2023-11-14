import PropTypes from 'prop-types';
import styles from './Bubble.module.css';

const Bubble = ({ bubbleText, bubbleIcon }) => {
  return (
    <div className={styles.bubble}>
      <div className={styles.bubbleInner}>
        <p className={styles.bubbleHeading}>{bubbleText}</p>
        {bubbleIcon && (
          <img src='./src/assets/star.svg' className={styles.bubbleStar} />
        )}
      </div>
    </div>
  );
};

Bubble.propTypes = {
  bubbleText: PropTypes.string.isRequired,
  bubbleIcon: PropTypes.bool,
};

Bubble.defaultProps = {
  bubbleIcon: false,
};

export default Bubble;
