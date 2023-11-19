import PropTypes from 'prop-types';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import formatYen from '../../utils/formatYen';
import styles from './ProductCard.module.css';

const ProductCard = ({ productData, cartData, setCartData }) => {
  const handleAddToCart = () => {
    let cartCopy = [...cartData];

    // Check if product is already in cart to increment quantity or add new entry
    const index = cartCopy.findIndex(
      (cartItem) => cartItem.id === productData.id
    );
    if (index === -1) {
      const newCartItem = {
        id: productData.id,
        title: productData.title,
        image: productData.image,
        quantity: 1,
        price: productData.price,
      };
      cartCopy.push(newCartItem);
    } else {
      cartCopy[index].quantity++;
    }

    setCartData([...cartCopy]);
  };

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
          <p className={styles.productTitle}>{productData.title}</p>
          <p className={styles.productPrice}>{formatYen(productData.price)}</p>
        </div>
        <div className={styles.bottomInfo}>
          <p className={styles.productDescription}>
            {productData.ingredients.join(', ')}
          </p>
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
