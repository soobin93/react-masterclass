import Circle from "./Circle";

const App = () => {
  return (
    <div>
      <Circle bgColor="red" text="Hello world!" />
      <Circle bgColor="blue" borderColor="yellow" />
      <Circle bgColor="green" borderColor="red" />
    </div>
  );
};

export default App;
