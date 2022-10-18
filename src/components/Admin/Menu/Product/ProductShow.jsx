import {
	DateField,
	ImageField,
	NumberField,
	ReferenceField,
	Show,
	SimpleShowLayout,
	TextField,
} from "react-admin";

export const ProductShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField
				source="id"
				style={{ textTransform: "uppercase" }}
				label="ID"
			/>
			<ReferenceField
				source="category_id.$oid"
				label="Category"
				reference="category"
				sx={{ textTransform: "uppercase" }}
			/>
			<TextField source="name" />
			<NumberField source="price" />
			<NumberField source="stock" />
			<ImageField source="thumbnail" label="Product Image" />
			<TextField source="title" />
			<DateField source="updated_at" />
		</SimpleShowLayout>
	</Show>
);
