import { useRef } from "react";
const Toggle = (props) => {
  const checkboxRef = useRef();
  const toggleHandler = () => {
    console.log(checkboxRef.current.checked);
  };
  return (
    <div className="control d-flex justify-content-end px-4 my-2">
      <div class="form-check form-switch fs-4">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          ref={checkboxRef}
          onChange={toggleHandler}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          Register
        </label>
      </div>
    </div>
  );
};

export default Toggle;
