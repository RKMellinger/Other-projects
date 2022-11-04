import PropTypes from "prop-types";
import {} from "react-bootstrap";

function Buttons([children, version, type, isDisabled]) {
    Buttons.defaultProps = {
      version: "primary",
      type: "button",
      isDisabled: false,
    };
    Buttons.propTypes = {
      children: PropTypes.node.isRequired,
      version: PropTypes.string,
      type: PropTypes.string,
      isDisabled: PropTypes.bool,
    };

  console.log("Here's Buttons");
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Buttons;
