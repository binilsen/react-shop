import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex my-4 justify-content-center">
      <ThreeDots
        height="150"
        width="80"
        radius="100"
        color="black"
        ariaLabel="Loading"
        wrapperClass=""
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default Loader;
