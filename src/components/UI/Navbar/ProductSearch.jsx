import { Icons, MComponents } from "../../MUIExporter";
import AsyncSelect, { components } from "react-select";
import { useRef, useState } from "react";
import axios from "axios";
import withAction from "../../withAction";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icons.Search />
    </components.DropdownIndicator>
  );
};
const ProductSearch = (props) => {
  const [options, setOptions] = useState();
  const selectRef = useRef();
  const { navigate } = props;
  const searchStyle = {
    menu: (provided, state) => ({
      ...provided,
      color: "#272343",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#272343" : "",
      backgroundColor: state.isFocused ? "#ffd803" : "",
    }),
  };
  const handleSelect = (value) => {
    if (value)
      axios
        .get(`http://localhost:3000//api/v1/product_search/${value}`)
        .then((response) => {
          const result = [];
          response.data.query.map((item) =>
            result.push({ value: item._slugs[0], label: item.name })
          );
          setOptions(result);
        });
  };
  const navigateProduct = (data) => {
    navigate(`/category/mobiles/${data.value}`);
    selectRef.current.select.clearValue();
    setOptions([]);
  };
  return (
    <MComponents.Stack
      px={3}
      justifyContent="center"
      direction="row"
      width="100%"
    >
      <div style={{ width: "100%" }}>
        <AsyncSelect
          menuColor="red"
          styles={searchStyle}
          defaultInputValue={null}
          theme="danger"
          options={options}
          ref={selectRef}
          placeholder="Search..."
          onChange={navigateProduct}
          onInputChange={handleSelect}
          components={{ DropdownIndicator }}
          noOptionsMessage={() => "Product not found"}
        />
      </div>
    </MComponents.Stack>
  );
};
export default withAction(ProductSearch);
