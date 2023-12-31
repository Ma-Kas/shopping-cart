import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/Navbar/Navbar';
import Cart from '../Cart/Cart';
import Burger from '../Burger/Burger';

import styles from './App.module.css';
import coffeeBeans from '../../assets/bg_img.png';

function App() {
  const [cartData, setCartData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const bodyRef = useRef(document.body);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);

  bodyRef.current.style.overflow = isCartOpen ? 'hidden' : 'auto';

  const { data, error, loading } = useFetch(
    `https://api.sampleapis.com/coffee/hot`
  );

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.page}>
      <img src={coffeeBeans} className={styles.coffeeBgLeft}></img>
      <img src={coffeeBeans} className={styles.coffeeBgRight}></img>
      <div className={styles.pageBg}></div>
      <Navbar
        cartData={cartData}
        onCartClick={toggleCart}
        onBurgerClick={toggleBurger}
      ></Navbar>
      <section className={styles.main}>
        <Outlet context={[data, cartData, setCartData, toggleCart]}></Outlet>
      </section>
      <Cart
        cartData={cartData}
        setCartData={setCartData}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
      ></Cart>
      <Burger isBurgerOpen={isBurgerOpen} toggleBurger={toggleBurger}></Burger>
    </div>
  );
}

export default App;
