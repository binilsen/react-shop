import axios from "axios";
import Cookies from "js-cookie";

/*
function overview
1. login : generic loginhandler
2. logout : remove user related data from browser
3. checkerror : check for error in auth api class
4. checkAuth : check if the user is logged in or not
5. getPermissions : for authorization
*/
const authProvider = {
	login: async ({ username, password }) => {
		const data = new FormData();
		data.append("email", username);
		data.append("password", password);

		const response = await axios
			.post("http://localhost:3000/api/v1/admin/sign_in", data)
			.catch((e) => {
				throw new Error("Network Error");
			});
		if (response.status == 200)
			Cookies.set("rails-admin-token", response.headers.authorization);
		return response;
	},
	logout: () => {
		Cookies.remove("rails-admin-token");
		return Promise.resolve();
	},
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			Cookies.remove("railsadmin-token");
			return Promise.reject();
		}
		return Promise.resolve();
	},
	checkAuth: () => {
		return Cookies.get("rails-admin-token")
			? Promise.resolve()
			: Promise.reject();
	},
	getPermissions: () => Promise.resolve(),
};

export default authProvider;
