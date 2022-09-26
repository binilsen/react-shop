import { MComponents } from "../../MUIExporter";
import shopping from "../../../assets/shopping.webm";
const Banner = () => {
  return (
    <>
      <MComponents.Grid container sx={{ my: 2 }} direction="column">
        <MComponents.Grid item>
          <MComponents.Stack
            justifyContent="center"
            alignItems="center"
            sx={{
              width: "100%",
              height: "300px",
              // background: `url(${deal}) no-repeat`,
              // backgroundSize: "contain",
              position: "relative",
            }}
          >
            <video
              height="300px"
              width="100%"
              loop
              muted
              autoPlay
              controls=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: "-1",
                width: "100%",
                objectFit: "cover",
                opacity: 0.9,
              }}
            >
              <source src={shopping} type="video/mp4" />
            </video>
            <MComponents.Typography variant="h2" sx={{ color: "primary.dark" }}>
              Welcome to React Shop
            </MComponents.Typography>
          </MComponents.Stack>
        </MComponents.Grid>
      </MComponents.Grid>
    </>
  );
};
export default Banner;
