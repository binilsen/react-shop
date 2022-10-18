import { MComponents, Icons } from "../../MUIExporter";
import HeaderCard from "./HeaderCard";

const Header = (props) => {
	return (
		<MComponents.Grid container justifyContent="center" spacing={1}>
			<MComponents.Grid item md={4}>
				<HeaderCard
					title={"Orders"}
					titleIcon={<Icons.Inventory />}
					infoIcon={<Icons.KeyboardDoubleArrowUp />}
					info={200}
				/>
			</MComponents.Grid>
			<MComponents.Grid item md={4}>
				<HeaderCard
					title={"Total Sale"}
					titleIcon={<Icons.Wallet />}
					infoIcon={<Icons.CurrencyRupee />}
					info={4000}
				/>
			</MComponents.Grid>
			<MComponents.Grid item md={4}>
				<HeaderCard
					title={"To be shipped"}
					infoIcon={<Icons.NotificationImportant />}
					titleIcon={<Icons.LocalShipping />}
					info={20}
				/>
			</MComponents.Grid>
		</MComponents.Grid>
	);
};
export default Header;
