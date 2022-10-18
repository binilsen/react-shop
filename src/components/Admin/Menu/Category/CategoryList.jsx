import { Datagrid, DateField, List, TextField, EditButton } from "react-admin";
import CustomToolbar from "../../../Utilites/Admin/Toolbar";
export const CategoryList = () => (
	<List actions={<CustomToolbar />}>
		<Datagrid rowClick="show">
			<TextField source="name" sx={{ textTransform: "capitalize" }} />
			<DateField source="updated_at" />
			<EditButton />
		</Datagrid>
	</List>
);
