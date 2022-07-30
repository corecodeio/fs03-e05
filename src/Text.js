import WithSomeLogic from "./withSomeLogic";

const Text = ({ onClick }) => {
  //logica del text

  return <div onClick={onClick}>Text</div>;
};
export default WithSomeLogic(Text, { componentName: "Text" });
