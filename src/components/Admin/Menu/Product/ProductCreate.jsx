import {
	Create,
	ImageField,
	ImageInput,
	NumberInput,
	ReferenceInput,
	SimpleForm,
	TextInput,
} from "react-admin";
import { validateAdminProduct } from "../../../Utilites/Validation";
const ProductCreate = () => {
	return (
		<Create redirect="show">
			<SimpleForm validate={validateAdminProduct}>
				<TextInput source="name" fullWidth label="Product Name" />
				<TextInput source="title" fullWidth label="Product Title" />
				<ReferenceInput source="category_id" reference="category" />
				<NumberInput source="stock" label="Stock" />
				<NumberInput source="price" label="Price" />
				<ImageInput source="thumbnail" label="Product Image" accept="image/*">
					<ImageField source="src" title="image" />
				</ImageInput>
			</SimpleForm>
		</Create>
	);
};

export default ProductCreate;
