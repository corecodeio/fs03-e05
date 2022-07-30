const WithSomeLogic = (Component, params) => {
  return (props) => {
    const onClick = () => {
      console.log(
        `Click desde el HOC, llamado desde el componente ${params.componentName}`
      );
      props.onClick();
    };
    return <Component {...props} onClick={onClick} />;
  };
};
export default WithSomeLogic;
