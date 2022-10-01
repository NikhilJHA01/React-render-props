import Input from "./Input";
import "./styles.css";

export default function App() {
  const renderText = (value) => {
    return <div>Value is {value}</div>;
  };
  const renderTextMult = (value, n) => {
    return <div>Value is {value * n}</div>;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Input render={renderText} />
      <Input type="number" render={(value) => renderTextMult(value, 2)} />
    </div>
  );
}
