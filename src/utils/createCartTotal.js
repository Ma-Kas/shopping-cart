const createCartTotal = (cartData) => {
  const cartCopy = [...cartData];
  let sum = 0;

  cartCopy.forEach((item) => {
    sum = sum + item.price * item.quantity;
  });

  return sum;
};

export default createCartTotal;
