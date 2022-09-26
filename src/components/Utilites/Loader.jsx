import { SpinnerCircular } from "spinners-react";
import { MComponents } from "../MUIExporter";

const Loader = () => {
  return (
    <MComponents.Container maxWidth="md" sx={{ height: "100vh" }}>
      <MComponents.Stack height="100%" justifyContent="center">
        <MComponents.Typography padding={1} marginY={3} textAlign="center">
          <SpinnerCircular
            color="#ffd803"
            thickness={150}
            size={70}
            secondaryColor="#272343"
          />
        </MComponents.Typography>
      </MComponents.Stack>
    </MComponents.Container>
  );
};

export const DefaultLoader = () => {
  return (
    <MComponents.Stack height="100%" justifyContent="center">
      <MComponents.Typography padding={1} marginY={3} textAlign="center">
        <SpinnerCircular
          color="#ffd803"
          thickness={150}
          size={70}
          secondaryColor="#272343"
        />
      </MComponents.Typography>
    </MComponents.Stack>
  );
};
export default Loader;
