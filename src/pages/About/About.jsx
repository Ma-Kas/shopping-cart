import { useNavigate } from 'react-router-dom';
import * as CONFIG from '../../data/configValues.json';
import Button from '../../components/Button/Button';

import styles from './About.module.css';
import aboutImage from '/src/assets/about_img.jpg';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <section className={styles.aboutContainer}>
        <div className={styles.aboutImageContainer}>
          <img
            src={aboutImage}
            alt='Coffee with latte art.'
            className={styles.aboutImage}
          />
        </div>
        <section className={styles.aboutDescriptionContainer}>
          <h2 className={styles.aboutHeading}>
            About <span className={styles.underlined}>Us</span>
          </h2>
          <h3 className={styles.aboutSubHeading}>
            We provide quality coffee, delivered straight to you
          </h3>
          <p className={styles.aboutDescription}>
            We are a company that makes and distributes delicious drinks. Our
            coffee is made with a special blend, and available in stores
            worldwide.
          </p>
          <Button
            onClick={() => navigate(CONFIG.storePath)}
            buttonText='Get your coffee'
          ></Button>
        </section>
      </section>
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContainer}>
          <h3 className={styles.subscriptionHeading}>
            Subscribe to get 50% off
          </h3>
          <form
            className={styles.subscriptionForm}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type='subscription'
              className={styles.subscriptionInput}
              name={styles.subscriptionInput}
              id={styles.subscriptionInput}
              placeholder='Email address'
              autoComplete='off'
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
