export const emailValid = (value) => {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/g.test(value);
};

export const passwordValid = (value) => {
  return value.length >= 6;
};

export const confirmPasswordValid = (value, password) => {
  return value.length >= 6 && value === password;
};
export const pincodeValid = (value) => {
  return !/\D/g.test(value) && value.length === 6;
};

export default {};
