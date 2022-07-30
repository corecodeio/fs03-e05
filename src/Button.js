import WithSomeLogic from "./withSomeLogic";

const Button = ({ onClick }) => {
  //logica del button

  return <button onClick={onClick}>Click Me!</button>;
};

export default WithSomeLogic(Button, { componentName: "Button" });
