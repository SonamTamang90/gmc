import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="mx-auto max-w-7xl lg:px-11">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
