import PropTypes from "prop-types";

function Head({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
Head.defaultProps = {
  text: "Product Review",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#6aff80",
};
Head.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Head;
