import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

const FancyTextInput = forwardRef((props, ref) => {
  const { name, placeholder = "" } = props;
  const [text, setText] = useState("");
  const inputRef = useRef();
  const onChange = (e) => setText(e.target.value);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );

  return (
    <div>
      <label htmlFor={name}></label>
      <input
        ref={inputRef}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={text}
      />
    </div>
  );
});

export default FancyTextInput;
