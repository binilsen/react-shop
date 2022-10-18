import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { Icons, MComponents } from "../../MUIExporter";
const data = [
	{
		name: "Jan",
		sale: 4000,
	},
	{
		name: "Feb",
		sale: 3000,
	},
	{
		name: "Mar",
		sale: 2000,
	},
	{
		name: "Apr",
		sale: 2780,
	},
	{
		name: "May",
		sale: 1890,
	},
	{
		name: "Jun",
		sale: 2390,
	},
	{
		name: "Jul",
		sale: 3490,
	},
	{
		name: "Aug",
		sale: 3490,
	},
	{
		name: "Sep",
		sale: 3490,
	},
	{
		name: "Oct",
		sale: 3490,
	},
	{
		name: "Nov",
		sale: 3490,
	},
	{
		name: "Dec",
		sale: 3490,
	},
];

const SaleChart = (props) => {
	return (
		<MComponents.Container sx={{ my: 3 }}>
			<MComponents.Card variant="outlined" sx={{ borderRadius: 4 }}>
				<MComponents.CardContent>
					<MComponents.Typography gutterBottom>
						<Icons.CurrencyRupee />
						Sales History
					</MComponents.Typography>
					<ResponsiveContainer width="99%" height={250}>
						<LineChart width={500} height={240} data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="sale" stroke="#8884d8" />
						</LineChart>
					</ResponsiveContainer>
				</MComponents.CardContent>
			</MComponents.Card>
		</MComponents.Container>
	);
};

export default SaleChart;
