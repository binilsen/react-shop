import {
	CreateButton,
	Datagrid,
	DateField,
	EditButton,
	ExportButton,
	ImageField,
	List,
	NumberField,
	ReferenceField,
	TextField,
	TopToolbar,
} from "react-admin";

const CustomAction = () => {
	return (
		<TopToolbar>
			<CreateButton />
			<ExportButton />
		</TopToolbar>
	);
};

export const ProductList = () => (
	<List actions={<CustomAction />}>
		<Datagrid rowClick="show">
			<TextField source="name" />
			<NumberField
				source="price"
				options={{ style: "currency", currency: "INR" }}
			/>
			<NumberField source="stock" />
			<ImageField source="thumbnail" />
			<ReferenceField
				source="category_id.$oid"
				label="Category"
				reference="category"
				sortable={false}
			/>
			<DateField source="updated_at" />
			<EditButton />
		</Datagrid>
	</List>
);
