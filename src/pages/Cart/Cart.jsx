import PropTypes from 'prop-types';
import styles from './Cart.module.css';

const Cart = ({ cartData, setCartData, isCartOpen, toggleCart }) => {
  const handleUpdateQuantity = (productData, isDecrease) => {
    let cartCopy = [...cartData];

    const index = cartCopy.findIndex(
      (cartItem) => cartItem.id === productData.id
    );
    if (isDecrease) {
      cartCopy[index].quantity--;
    } else {
      cartCopy[index].quantity++;
    }

    setCartData([...cartCopy]);
  };

  const handleDeleteFromCart = (productData) => {
    let cartCopy = [...cartData];
    const index = cartCopy.findIndex(
      (cartItem) => cartItem.id === productData.id
    );
    if (index === -1) return;
    cartCopy.splice(index, 1);
    setCartData([...cartCopy]);
  };

  return (
    <div
      className={
        isCartOpen
          ? `${styles.cartPopout}`
          : `${styles.cartPopout} ${styles.hidden}`
      }
    >
      <button type='button' onClick={handleUpdateQuantity}>
        Update Quantity
      </button>
      <button type='button' onClick={handleDeleteFromCart}>
        Delete
      </button>
      <button type='button' onClick={toggleCart}>
        Close
      </button>

      <section className={styles.cartItemList}>
        {cartData.map((item) => (
          <div className={styles.cartItemContainer} key={item.id}>
            <div className={styles.itemName}>{item.title}</div>
            <div className={styles.itemQuantity}>{item.quantity}</div>
            <div className={styles.itemQuantity}>{`${
              item.quantity * item.price
            }円`}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

Cart.propTypes = {
  cartData: PropTypes.array.isRequired,
  setCartData: PropTypes.func.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

export default Cart;
