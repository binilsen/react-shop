import {
	Admin,
	Resource,
	ListGuesser,
	fetchUtils,
	ShowGuesser,
	EditGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard";
import authProvider from "../Utilites/authProvider";
import { defaultTheme } from "react-admin";
import dataProvider from "./dataProvider";
import { OrderList } from "./Menu/Order/OrderList";
import { ProductList } from "./Menu/Product/ProductList";
import { UserList } from "./Menu/User/UserList";
import { CategoryList } from "./Menu/Category/CategoryList";
import { OrderShow } from "./Menu/Order/OrderShow";
import { CategoryShow } from "./Menu/Category/CategoryShow";
import { ProductShow } from "./Menu/Product/ProductShow";
import { UserShow } from "./Menu/User/UserShow";
import { Icons } from "../MUIExporter";
import { ProductEdit } from "./Menu/Product/ProductEdit";
import { CategoryEdit } from "./Menu/Category/CategoryEdit";
import ProductCreate from "./Menu/Product/ProductCreate";
import CategoryCreate from "./Menu/Category/CategoryCreate";

const customTheme = {
	...defaultTheme,
	palette: {
		primary: {
			main: "#272343",
		},
		secondary: {
			main: "#ffd803",
		},
	},
};
const AdminPanel = (props) => {
	return (
		<Admin
			theme={customTheme}
			basename="/admin"
			authProvider={authProvider}
			dashboard={Dashboard}
			dataProvider={dataProvider}
		>
			<Resource
				name="orders"
				list={OrderList}
				show={OrderShow}
				icon={Icons.Assignment}
				recordRepresentation="id"
			/>
			<Resource
				name="products"
				list={ProductList}
				show={ProductShow}
        edit={ProductEdit}
        create={ProductCreate}
				icon={Icons.Inventory2}
				recordRepresentation="name"
			/>
			<Resource
				name="category"
				list={CategoryList}
				show={CategoryShow}
				recordRepresentation="name"
        edit={CategoryEdit}
        create={CategoryCreate}
				icon={Icons.CategoryRounded}
			/>
			<Resource
				name="users"
				list={UserList}
				show={UserShow}
				icon={Icons.Group}
				recordRepresentation="email"
			/>
		</Admin>
	);
};
export default AdminPanel;
