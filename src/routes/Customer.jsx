import { Outlet } from "react-router-dom";

import * as Component from "../components/ComponentExporter";

const Customer = (props) => {
	return (
		<>
			<Component.Header />
			<Component.StatusBar />
			<Component.CategoryBar />
			<Outlet />
			<Component.Footer />
		</>
	);
};

export default Customer;
