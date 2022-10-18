import {
	Edit,
	NumberInput,
	ReferenceInput,
	SimpleForm,
	TextInput,
} from "react-admin";
import { validateAdminProduct } from "../../../Utilites/Validation";

export const ProductEdit = () => {
	return (
		<Edit redirect="show">
			<SimpleForm validate={validateAdminProduct}>
				<ReferenceInput
					label="Category"
					source="category_id"
					reference="category"
				/>
				<TextInput source="name" />
				<NumberInput source="price" />
				<NumberInput source="stock" />
				<TextInput source="thumbnail" />
				<TextInput source="title" />
			</SimpleForm>
		</Edit>
	);
};
