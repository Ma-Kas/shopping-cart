import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as CONFIG from '../../data/configValues.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import Bubble from '../../components/Bubble/Bubble';
import Button from '../../components/Button/Button';

import styles from './Home.module.css';
import cappucinoImage from '/src/assets/cappuccino.jpg';

const Home = () => {
  const [data, cartData, setCartData, toggleCart] = useOutletContext();

  const navigate = useNavigate();

  // Trunc the data array to how many products to display
  const localData = data.slice(0, CONFIG.MAX_PRODUCTS_HOMEPAGE);

  return (
    <>
      <section className={styles.hero}>
        <section className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Enjoy your <span className={styles.titleHighlight}>coffee </span>
            before your activity
          </h1>
          <p className={styles.heroDescription}>
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <Button
            onClick={() => navigate(CONFIG.storePath)}
            buttonText='Get your coffee'
          ></Button>
        </section>
        <div className={styles.heroImageContainer}>
          <div className={styles.bubbleContainer}>
            <Bubble
              bubbleText='Cappuccino'
              positionStyle={{ width: '30%', top: '10%', left: '-15%' }}
            ></Bubble>
            <Bubble
              bubbleText='4.8'
              positionStyle={{ width: '30%', top: '25%', right: '-10%' }}
              bubbleIcon
            ></Bubble>
            <Bubble
              bubbleText='350円'
              positionStyle={{ width: '30%', bottom: '5%', left: '0' }}
            ></Bubble>
          </div>
          <img
            src={cappucinoImage}
            alt='A declicious cappucino'
            className={styles.heroImage}
          />
        </div>
      </section>
      <section className={styles.spotlightContainer}>
        <h2 className={styles.spotlightHeader}>
          Popular <span className={styles.underlined}>Now</span>
        </h2>

        <div className={styles.cardContainer}>
          <div className={styles.spotlightBackground}></div>
          {localData.map((dataSet) => (
            <ProductCard
              productData={dataSet}
              cartData={cartData}
              setCartData={setCartData}
              toggleCart={toggleCart}
              key={dataSet.id}
            ></ProductCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
