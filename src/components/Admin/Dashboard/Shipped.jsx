import { Icons, MComponents } from "../../MUIExporter";

const Shipped = (props) => {
	return (
		<MComponents.Paper elevation={12} sx={{ p: 1 }}>
			<MComponents.Typography variant="overline" borderBottom={1}>
				Recently Shipped
			</MComponents.Typography>
			<MComponents.Stack spacing={1}>
				<MComponents.Stack
					direction="row"
					borderRadius={2}
					p={1}
					bgcolor="secondary.main"
					justifyContent="space-between"
				>
					<Icons.LocalShipping />
					<MComponents.Typography>OR132324343</MComponents.Typography>
				</MComponents.Stack>
				<MComponents.Stack
					direction="row"
					borderRadius={2}
					p={1}
					bgcolor="secondary.main"
					justifyContent="space-between"
				>
					<Icons.LocalShipping />
					<MComponents.Typography>OR132324343</MComponents.Typography>
				</MComponents.Stack>
				<MComponents.Stack
					direction="row"
					borderRadius={2}
					p={1}
					bgcolor="secondary.main"
					justifyContent="space-between"
				>
					<Icons.LocalShipping />
					<MComponents.Typography>OR132324343</MComponents.Typography>
				</MComponents.Stack>
			</MComponents.Stack>
		</MComponents.Paper>
	);
};

export default Shipped;
