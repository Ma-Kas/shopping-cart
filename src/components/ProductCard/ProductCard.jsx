import PropTypes from 'prop-types';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './ProductCard.module.css';

const ProductCard = ({ productData }) => {
  return (
    <div className={styles.cardOuter}>
      <div className={styles.cardInner}>
        <div className={styles.imageContainer}>
          <img
            src={productData.image}
            alt={`Coffee ${productData.title}`}
            className={styles.productImage}
          />
        </div>
        <div className={styles.middleInfo}>
          <p className={styles.produtTitle}>{productData.title}</p>
          <p className={styles.productPrice}>{productData.price}</p>
        </div>
        <div className={styles.bottomInfo}>
          <p className={styles.productDescription}>{productData.ingredients}</p>
          <AddToCartButton
            onClick={() => console.log('added to cart')}
          ></AddToCartButton>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.object.isRequired,
};

export default ProductCard;
