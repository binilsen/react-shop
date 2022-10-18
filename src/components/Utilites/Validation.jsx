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
export const mobileValid = (value) => {
	return !/\D/g.test(value) && value.length === 10;
};

export const validateAdminProduct = (values) => {
	const errors = {};
	if (!values.category_id) errors.category_id = "Category required";
	if (!values.name) errors.name = "Product name required";
	if (!values.title) errors.title = "Product title required";
	if (!values.thumbnail) errors.thumbnail = "Product image required";
	if (!values.stock) errors.stock = "Product stock required";
	if (!values.price) errors.price = "Product price required";
	return errors;
};
export const validateAdminCategory = (value) => {
	const errors = {};
	if (!value.name) errors.name = "Name required";
	if (!value.title) errors.title = "Title required";
	return errors;
};
export default {};
