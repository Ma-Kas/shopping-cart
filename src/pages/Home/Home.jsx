import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as CONFIG from '../../data/configValues.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import Bubble from '../../components/Bubble/Bubble';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  const [data, cartData, setCartData] = useOutletContext();

  const navigate = useNavigate();

  // Trunc the data array to how many products to display
  const localData = data.slice(0, CONFIG.MAX_PRODUCTS_HOMEPAGE);

  return (
    <>
      <div className={styles.mainContent}></div>
      <div className={styles.productSpotlight}>
        <div className={styles.cardContainer}>
          {localData.map((dataSet) => (
            <ProductCard
              productData={dataSet}
              cartData={cartData}
              setCartData={setCartData}
              key={dataSet.id}
            ></ProductCard>
          ))}
        </div>
      </div>
      <Bubble bubbleText='Cappuccino'></Bubble>
      <Bubble bubbleText='4.8' bubbleIcon></Bubble>
      <Button
        onClick={() => navigate('/store')}
        buttonText='Get your coffee'
      ></Button>
    </>
  );
};

export default Home;
