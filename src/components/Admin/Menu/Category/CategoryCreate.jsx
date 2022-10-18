import { Create, SimpleForm, TextInput } from "react-admin";
import { validateAdminCategory } from "../../../Utilites/Validation";
const CategoryCreate = () => {
	return (
		<Create redirect="show">
			<SimpleForm validate={validateAdminCategory}>
				<TextInput source="name" fullWidth />
				<TextInput source="title" fullWidth />
			</SimpleForm>
		</Create>
	);
};
export default CategoryCreate;
