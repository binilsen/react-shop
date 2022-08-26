import { useEffect, useRef, useState } from "react";
const Toggle = (props) => {
  const checkboxRef = useRef();
  const [toggleValue, setToggleValue] = useState(false);
  const toggleText = toggleValue ? "Login" : "Register";
  console.log(toggleValue);
  useEffect(() => {
    setToggleValue(props.controller);
    props.onToggle(toggleValue);
  }, [props.controller]);
  const toggleHandler = () => {
    setToggleValue(checkboxRef.current.checked);
    props.onToggle(checkboxRef.current.checked);
  };
  return (
    <div className="control d-flex justify-content-end px-4 my-2">
      <div className="form-check form-switch fs-4">
        {toggleValue && (
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            ref={checkboxRef}
            checked
            onChange={toggleHandler}
          />
        )}
        {!toggleValue && (
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            ref={checkboxRef}
            onChange={toggleHandler}
          />
        )}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {toggleText}
        </label>
      </div>
    </div>
  );
};

export default Toggle;
