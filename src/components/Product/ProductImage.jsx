import Tilt from "react-parallax-tilt";
const ProductImage = (props) => {
	return (
		<Tilt>
			<img
				src={props.image}
				style={{
					objectFit: "contain",
				}}
				height="300px"
				width="400px"
			/>
		</Tilt>
	);
};
export default ProductImage;
