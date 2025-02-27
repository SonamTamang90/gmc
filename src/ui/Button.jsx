import PropTypes from "prop-types";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`${className} text-xs font-semibold uppercase`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes?.func,
  className: PropTypes?.string,
};

export default Button;
