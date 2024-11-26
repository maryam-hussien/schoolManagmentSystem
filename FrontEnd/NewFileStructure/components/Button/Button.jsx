import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, color, onClick, className }) => {
  
  return (
    <button
      className={`btn ${color} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  color: "primary",
  onClick: () => {},
  className: "",
};

export default Button;
