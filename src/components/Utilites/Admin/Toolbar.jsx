import { TopToolbar, CreateButton, ExportButton } from "react-admin";
const CustomToolbar = () => {
	return (
		<TopToolbar>
			<CreateButton />
			<ExportButton />
		</TopToolbar>
	);
};

export default CustomToolbar;
