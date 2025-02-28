import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-7xl px-6 ${className}`}>{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes?.string,
};

export default Container;
