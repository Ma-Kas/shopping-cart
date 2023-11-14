import useFetch from './hooks/useFetch';
import Navbar from './components/Navbar/Navbar';

import ProductCard from './components/ProductCard/ProductCard';
import Bubble from './components/Bubble/Bubble';
import Button from './components/Button/Button';

function App() {
  const { data, error, loading } = useFetch(
    `https://api.sampleapis.com/coffee/hot`
  );

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ backgroundColor: '#f9d9aa', padding: '2rem 6rem' }}>
      <Navbar onCartClick={() => console.log('cart opened')}></Navbar>
      <ProductCard
        productData={{
          title: 'Red Eye',
          description:
            'Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.',
          ingredients: ['Coffee', 'Espresso'],
          image:
            'https://upload.wikimedia.org/wikipedia/commons/f/f7/Linea_doubleespresso.jpg',
          price: '3,5€',
        }}
      ></ProductCard>
      <Bubble bubbleText='Cappuccino'></Bubble>
      <Bubble bubbleText='4.8' bubbleIcon></Bubble>
      <Button
        onClick={() => console.log('open shop')}
        buttonText='Get your coffee'
      ></Button>
    </div>
  );
}

export default App;
