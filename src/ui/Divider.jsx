import PropTypes from "prop-types";

const Divider = ({ backgroundColor }) => {
  return <div className={`${backgroundColor} my-5 h-px`} />;
};

Divider.propTypes = {
  backgroundColor: PropTypes?.string,
};

export default Divider;
