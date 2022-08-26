const gstCalculator = (price) => {
  const gstExclude = parseInt(price / 1.05);
  return parseInt(gstExclude * 0.05);
};
export default gstCalculator;
