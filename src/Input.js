const { useState } = require("react");

const Input = (props) => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={handleChange} />
      <br />
      {props.render(value)}
    </>
  );
};

export default Input;
