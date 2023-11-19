import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import createCartTotal from '../../utils/createCartTotal';
import formatYen from '../../utils/formatYen';
import styles from './Cart.module.css';

const Cart = ({ cartData, setCartData, isCartOpen, toggleCart }) => {
  const handleUpdateQuantity = (productData, isDecrease) => {
    const cartCopy = [...cartData];

    const index = cartCopy.findIndex(
      (cartItem) => cartItem.id === productData.id
    );
    if (isDecrease) {
      if (cartCopy[index].quantity === 1) {
        handleDeleteFromCart(productData);
        return;
      }
      cartCopy[index].quantity--;
    } else {
      cartCopy[index].quantity++;
    }
    setCartData([...cartCopy]);
  };

  const handleDeleteFromCart = (productData) => {
    const cartCopy = [...cartData];
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
        isCartOpen ? `${styles.cart}` : `${styles.cart} ${styles.hidden}`
      }
    >
      <div className={styles.cartPopout}>
        <header className={styles.cartHeader}>
          <h2 className={styles.cartHeading}>Your Cart</h2>
          <button type='button' onClick={toggleCart}>
            <img src='/src/assets/close.svg' className={styles.cartItemIcons} />
          </button>
        </header>
        <section className={styles.cartItemList}>
          {cartData.map((item) => (
            <div className={styles.cartItemContainer} key={item.id}>
              <div className={styles.itemName}>{item.title}</div>
              <div className={styles.itemOrderContainer}>
                <div className={styles.quantityContainer}>
                  <button
                    type='button'
                    onClick={() => handleUpdateQuantity(item, true)}
                  >
                    <img
                      src='/src/assets/minus.svg'
                      className={styles.cartItemIcons}
                    />
                  </button>
                  <div className={styles.itemQuantity}>{item.quantity}</div>
                  <button
                    type='button'
                    onClick={() => handleUpdateQuantity(item, false)}
                  >
                    <img
                      src='/src/assets/plus.svg'
                      className={styles.cartItemIcons}
                    />
                  </button>
                </div>
                <div className={styles.itemPrice}>
                  {formatYen(item.quantity * item.price)}
                </div>
                <button
                  type='button'
                  className={styles.btnDelete}
                  onClick={() => handleDeleteFromCart(item)}
                >
                  <img
                    src='/src/assets/delete.svg'
                    className={styles.cartItemIcons}
                  />
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.checkoutSection}>
          <div className={styles.checkoutTitle}>Cart Total</div>
          <div className={styles.checkoutContainer}>
            <div className={styles.totalPrice}>
              {formatYen(createCartTotal(cartData))}
            </div>
            <Button buttonText='Checkout'></Button>
          </div>
        </section>
      </div>
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
