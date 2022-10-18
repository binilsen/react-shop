import { useSelector } from "react-redux";
import { MComponents } from "../MUIExporter";
import priceFormatter from "../Utilites/priceFormatter";
import withAction from "../withAction";
import { setBuynowProduct } from "../../store/slices/buyNowSlice";
const ProductInfo = (props) => {
	const cartProducts = useSelector((state) => state.cartReducer.carts_products);
	const { authState, Link, dispatch, navigate } = props;
	const isSelected = cartProducts
		? cartProducts.find((item) => item.product_id.$oid == props.data._id.$oid)
		: null;
	const buyHandler = () => {
		dispatch(
			setBuynowProduct({
				product: props.data._id.$oid,
				amount: props.data.price,
			})
		);
		navigate(`/cart/buy-now/processcart`);
	};
	return (
		<MComponents.Grid
			container
			direction="column"
			justifyContent="space-evenly"
			py={1}
		>
			<MComponents.Grid item>
				<MComponents.Typography variant="h4">
					{props.data.name}
				</MComponents.Typography>
				<MComponents.Typography variant="caption">
					By Apple
				</MComponents.Typography>
			</MComponents.Grid>
			<MComponents.Grid item>
				<MComponents.Rating
					name="half-rating-read"
					defaultValue={Number.parseInt(2)}
					readOnly
				/>
			</MComponents.Grid>
			<MComponents.Grid item>
				<MComponents.Typography variant="h4">
					{priceFormatter(props.data.price)}
				</MComponents.Typography>
			</MComponents.Grid>
			<MComponents.Grid item>
				<MComponents.Typography variant="overline" my={1} borderBottom={1}>
					Product Description:
				</MComponents.Typography>
				<MComponents.Box width="50%" m="auto">
					<MComponents.Typography
						variant="body1"
						textAlign="justify"
						color="primary"
					>
						{props.data.title}
					</MComponents.Typography>
				</MComponents.Box>
			</MComponents.Grid>
			<MComponents.Grid item>
				<MComponents.Stack direction="row" my={1} justifyContent="space-evenly">
					<MComponents.Button
						variant="contained"
						color="secondary"
						onClick={buyHandler}
					>
						Buy now
					</MComponents.Button>
					{authState && isSelected && (
						<MComponents.Button
							variant="contained"
							color="primary"
							component={Link}
							to="/cart"
						>
							Go to cart
						</MComponents.Button>
					)}
				</MComponents.Stack>
			</MComponents.Grid>
		</MComponents.Grid>
	);
};

export default withAction(ProductInfo);
