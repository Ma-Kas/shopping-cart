import { useOutletContext } from 'react-router-dom';
import * as CONFIG from '../../data/configValues.json';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Store.module.css';

const Store = () => {
  const [data, cartData, setCartData] = useOutletContext();

  // Trunc the data array to how many products to display
  const localData = data.slice(0, CONFIG.MAX_PRODUCTS_STORE);

  return (
    <div className={styles.storeContainer}>
      <h2 className={styles.storeHeading}>
        Special menu <span className={styles.underlined}>for you</span>
      </h2>
      <div className={styles.cardContainer}>
        {localData.map((dataSet) => (
          <ProductCard
            cartData={cartData}
            setCartData={setCartData}
            productData={dataSet}
            key={dataSet.id}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Store;
