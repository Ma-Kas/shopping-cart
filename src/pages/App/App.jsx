import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Navbar from '../../components/Navbar/Navbar';
import styles from './App.module.css';

function App() {
  const [cartData, setCartData] = useState([]);

  const { data, error, loading } = useFetch(
    `https://api.sampleapis.com/coffee/hot`
  );

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles.page}>
      <Navbar
        cartData={cartData}
        onCartClick={() => console.log('cart opened')}
      ></Navbar>
      <section className={styles.main}>
        <Outlet context={[data, cartData, setCartData]}></Outlet>
      </section>
    </div>
  );
}

export default App;
