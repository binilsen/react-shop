import { MComponents } from "../../MUIExporter";
import Header from "./Header";
import Orders from "./Orders";
import SaleChart from "./SaleChart";
import Shipped from "./Shipped";
const Dashboard = (props) => {
	return (
		<>
			<MComponents.Box p={2}>
				<Header />
				<SaleChart />
				<MComponents.Grid container spacing={1}>
					<MComponents.Grid item md={8}>
						<Orders />
					</MComponents.Grid>
					<MComponents.Grid item md={4}>
						<Shipped />
					</MComponents.Grid>
				</MComponents.Grid>
			</MComponents.Box>
		</>
	);
};
export default Dashboard;
