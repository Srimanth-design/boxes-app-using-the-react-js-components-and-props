function Box(props) {
  const { className, textContent } = props;
  return (
  <div className={className}}>
    <p className="box-title">{textContent}</p>
  </div>;
  )}

const element = (
  <div className="bg-main">
    <h1>Boxes</h1>
    <div className="main-cont">
      <Box className="first" textContent="Small" />
      <Box className="second" textContent="Medium" />
      <Box className="third" textContent="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
