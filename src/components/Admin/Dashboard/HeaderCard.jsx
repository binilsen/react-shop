import { Icons, MComponents } from "../../MUIExporter";

const HeaderCard = (props) => {
	return (
		<MComponents.Paper
			sx={{ p: 1, bgcolor: "primary.main", color: "secondary.main" }}
		>
			<MComponents.Grid container direction="column">
				<MComponents.Grid item>
					<MComponents.Stack direction="row" spacing={1}>
						<MComponents.Box>{props.titleIcon} </MComponents.Box>
						<MComponents.Typography variant="overline">
							{props.title}
						</MComponents.Typography>
					</MComponents.Stack>
				</MComponents.Grid>
				<MComponents.Grid item>
					<MComponents.Typography variant="h3" textAlign="right">
						{props.infoIcon} {props.info}
					</MComponents.Typography>
				</MComponents.Grid>
			</MComponents.Grid>
		</MComponents.Paper>
	);
};

export default HeaderCard;
