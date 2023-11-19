const formatYen = (inputValue) => {
  return `${inputValue.toLocaleString('ja-JP').toString()}円`;
};

export default formatYen;
