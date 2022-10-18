import {
	DateField,
	ReferenceField,
	Show,
	SimpleShowLayout,
	TextField,
} from "react-admin";

export const CategoryShow = () => (
	<Show>
		<SimpleShowLayout>
			<TextField source="_id.$oid" label="ID" textTransform="uppercase" />
			<TextField source="name" />
			<TextField source="title" />
			<DateField source="updated_at" />
		</SimpleShowLayout>
	</Show>
);
