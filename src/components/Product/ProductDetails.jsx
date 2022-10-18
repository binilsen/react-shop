import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MComponents } from "../MUIExporter";
import ProductInfo from "./ProductInfo";
import Loader from "../Utilites/Loader";
import withAction from "../withAction";
import ProductImage from "./ProductImage";
const ProductDetails = (props) => {
	const id = useParams();
	const [productData, setProductData] = useState();
	const { defaultServerError } = props;
	useEffect(() => {
		axios
			.get(`http://127.0.0.1:3000/api/v1/products/${id.item}`)
			.then((response) => setProductData(response))
			.catch((error) => defaultServerError());
	}, []);
	return (
		<>
			{!productData && <Loader />}
			{productData && (
				<MComponents.Container>
					<MComponents.Stack
						height="100%"
						justifyContent="center"
						alignItems="center"
					>
						<MComponents.Paper elevation={20} sx={{ p: 2, my: 3 }}>
							<MComponents.Grid
								container
								direction="column"
								justifyContent="center"
								alignItems="center"
							>
								<MComponents.Grid item textAlign="center">
									<ProductImage image={productData.data.thumbnail} />
								</MComponents.Grid>
								<MComponents.Grid item textAlign="center">
									<ProductInfo data={productData.data} />
								</MComponents.Grid>
							</MComponents.Grid>
						</MComponents.Paper>
					</MComponents.Stack>
				</MComponents.Container>
			)}
		</>
	);
};
export default withAction(ProductDetails);
