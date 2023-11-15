import PropTypes from 'prop-types';
// import Bubble from '../Bubble/Bubble';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './ProductCard.module.css';

const ProductCard = ({ productData, cartData, setCartData }) => {
  const handleAddToCart = () => {
    let cartCopy = [...cartData];
    cartCopy.push(productData);
    setCartData([...cartCopy]);
  };

  return (
    <div className={styles.cardOuter}>
      <div className={styles.cardInner}>
        <div className={styles.imageContainer}>
          {/* <Bubble bubbleText='4.8' bubbleIcon></Bubble> */}
          <img
            src={productData.image}
            alt={`Coffee ${productData.title}`}
            className={styles.productImage}
          />
        </div>
        <div className={styles.middleInfo}>
          <p className={styles.productTitle}>{productData.title}</p>
          <p className={styles.productPrice}>3,50€</p>
        </div>
        <div className={styles.bottomInfo}>
          <p className={styles.productDescription}>{productData.ingredients}</p>
          <AddToCartButton onClick={handleAddToCart}></AddToCartButton>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object.isRequired,
  cartData: PropTypes.array.isRequired,
  setCartData: PropTypes.func.isRequired,
};

export default ProductCard;
