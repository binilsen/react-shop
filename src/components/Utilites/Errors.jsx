export const errorMessages = {
  register: [
    {
      email: "Invalid email.",
    },
    {
      password: "Password need to be atleast 6 character long.",
    },
    {
      confirmPassword: "Password doesn't match.",
    },
  ],
  login: [],
};

export const errorFormatter = (errors) => {
  const errorString = JSON.stringify(errors);
  return errorString.replace(/[{}_"\[\]:]+/gm, " ");
};
