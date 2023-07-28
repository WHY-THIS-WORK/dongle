import * as React from "react";

const LoginInput = React.forwardRef((props, ref) => {
  return (
    <div className="login__form-block">
      <label className="login__form-title">{props.title}</label>
      <input
        type={`${props.type}`}
        id={`${props.id}`}
        value={props.value}
        className="login__form-input"
        placeholder={`${props.placeholder}`}
        onChange={props.onChangeHandler}
        ref={ref}
      />
      {<span className="error__message">{props.message}</span>}
    </div>
  );
});

export default LoginInput;
