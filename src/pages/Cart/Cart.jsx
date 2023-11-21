import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import createCartTotal from '../../utils/createCartTotal';
import formatYen from '../../utils/formatYen';

import styles from './Cart.module.css';
import closeIcon from '/src/assets/close.svg';
import minusIcon from '/src/assets/minus.svg';
import plusIcon from '/src/assets/plus.svg';
import deleteIcon from '/src/assets/delete.svg';

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

  // Implement Memoization to avoid unneccessary recalculation
  const totalPrice = useMemo(() => {
    return createCartTotal(cartData);
  }, [cartData]);

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
            <img src={closeIcon} className={styles.cartItemIcons} />
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
                    <img src={minusIcon} className={styles.cartItemIcons} />
                  </button>
                  <div className={styles.itemQuantity}>{item.quantity}</div>
                  <button
                    type='button'
                    onClick={() => handleUpdateQuantity(item, false)}
                  >
                    <img src={plusIcon} className={styles.cartItemIcons} />
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
                  <img src={deleteIcon} className={styles.cartItemIcons} />
                </button>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.checkoutSection}>
          <div className={styles.checkoutTitle}>Cart Total</div>
          <div className={styles.checkoutContainer}>
            <div className={styles.totalPrice}>{formatYen(totalPrice)}</div>
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
