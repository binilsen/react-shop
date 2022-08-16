import { forwardRef } from "react";

const Input =forwardRef( (props,ref) => {
  return (
    <div className="form-floating my-1">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className="form-control"
        ref={ref}
        onChange={props.onChange}
      />
      <label className="text-capitalize" htmlFor={props.name}>
        {props.name}
      </label>
    </div>
  );
});

export default Input;
