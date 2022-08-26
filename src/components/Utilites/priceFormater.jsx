const priceFormater = (price) => {
  const priceFormater = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return priceFormater.format(price);
};

export default priceFormater;
