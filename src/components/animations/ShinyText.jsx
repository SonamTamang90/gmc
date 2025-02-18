const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  return (
    <div className={`shiny-text ${disabled ? "disabled" : ""} ${className}`}>
      {text}
    </div>
  );
};

export default ShinyText;
