import PropTypes from 'prop-types';

import styles from './Bubble.module.css';
import starIcon from '/src/assets/star.svg';

const Bubble = ({ bubbleText, positionStyle, bubbleIcon }) => {
  return (
    <div className={styles.bubble} style={positionStyle}>
      <div className={styles.bubbleInner}>
        <p className={styles.bubbleHeading}>{bubbleText}</p>
        {bubbleIcon && <img src={starIcon} className={styles.bubbleStar} />}
      </div>
    </div>
  );
};

Bubble.propTypes = {
  bubbleText: PropTypes.string.isRequired,
  positionStyle: PropTypes.object.isRequired,
  bubbleIcon: PropTypes.bool,
};

Bubble.defaultProps = {
  bubbleIcon: false,
};

export default Bubble;
