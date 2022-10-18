import { Icons, MComponents } from "../../MUIExporter";

const Orders = (props) => {
	return (
		<>
			<MComponents.Paper elevation={12} sx={{ p: 1 }}>
				<MComponents.Typography variant="overline" borderBottom={1}>
					Recent Orders
				</MComponents.Typography>
				<MComponents.List
					sx={{ bgcolor: "primary.main", color: "secondary.main", p: 1 }}
				>
					<MComponents.ListItem>
						<MComponents.ListItemAvatar>
							<Icons.SupervisedUserCircle />
						</MComponents.ListItemAvatar>
						<MComponents.ListItemText>Order 1</MComponents.ListItemText>
					</MComponents.ListItem>
					<MComponents.ListItem>
						<MComponents.ListItemAvatar>
							<Icons.SupervisedUserCircle />
						</MComponents.ListItemAvatar>
						<MComponents.ListItemText>Order 1</MComponents.ListItemText>
					</MComponents.ListItem>
					<MComponents.ListItem>
						<MComponents.ListItemAvatar>
							<Icons.SupervisedUserCircle />
						</MComponents.ListItemAvatar>
						<MComponents.ListItemText>Order 1</MComponents.ListItemText>
					</MComponents.ListItem>
					<MComponents.ListItem>
						<MComponents.ListItemAvatar>
							<Icons.SupervisedUserCircle />
						</MComponents.ListItemAvatar>
						<MComponents.ListItemText>Order 1</MComponents.ListItemText>
					</MComponents.ListItem>
					<MComponents.ListItem>
						<MComponents.ListItemAvatar>
							<Icons.SupervisedUserCircle />
						</MComponents.ListItemAvatar>
						<MComponents.ListItemText>Order 1</MComponents.ListItemText>
					</MComponents.ListItem>
				</MComponents.List>
			</MComponents.Paper>
		</>
	);
};

export default Orders;
