const priceFormatter = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

export const gstFormatter = (price, gst = true) => {
  if (gst) return price / (1 + 18 / 100);
  return (price * 18) / 100;
};

export default priceFormatter;
