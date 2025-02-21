const Button = ({
  children,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
  size = "medium",
  icon = null,
  text = "",
  onClick = () => {},
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-white bg-transparent text-white rounded-full hover:bg-zinc-100 focus:ring-zinc-600 hover:text-zinc-600",

    icon: "text-zinc-300 hover:text-white focus:outline-none",
  };

  const sizes = {
    small: "h-8 px-3",
    medium: "h-10",
    large: "h-11 px-11",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} `}
    >
      <span>{text}</span>
      <span>{icon && icon}</span>
    </button>
  );
};

export default Button;
