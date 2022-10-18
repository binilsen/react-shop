import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => (
	<Edit>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="title" />
		</SimpleForm>
	</Edit>
);
