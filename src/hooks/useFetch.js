import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const createRandomPrice = () => {
    const randomPrice = Math.floor(Math.random() * (75 - 40) + 40);
    return `${randomPrice}0`;
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url, { mode: 'cors' });
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let actualData = await response.json();
        actualData.forEach((element) => {
          element.price = createRandomPrice();
        });

        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
