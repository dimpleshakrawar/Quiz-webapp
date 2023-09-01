import PropTypes from "prop-types";

const Button = ({ label, background, color, onClick }) => {
  return (
    <button
      className={`h-10 flex items-center px-6 font-semibold rounded-md bg-${background} text-${color}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
