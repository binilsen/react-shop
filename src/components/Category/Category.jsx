import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import ProductContainer from "../Product/ProductContainer";
import Loader from "../Utilites/Loader";
import NotFound from "../Utilites/NotFound";
const Category = () => {
	const params = useParams();
	const [data, setData] = useState();
	useEffect(() => {
		axios
			.get(`http://127.0.0.1:3000/api/v1/category/${params.slug}`)
			.then((response) => setData(response.data));
	}, [params.slug]);
	return (
		<MComponents.Container maxWidth="lg" sx={{ my: 2 }}>
			<MComponents.Typography
				variant="h5"
				borderBottom={1}
				textTransform="capitalize"
			>
				{params.slug}
			</MComponents.Typography>
			{data && data.length != 0 && <ProductContainer products={data} />}
			{!data && <Loader />}
			{data && data.length == 0 && <NotFound />}
		</MComponents.Container>
	);
};
export default Category;
