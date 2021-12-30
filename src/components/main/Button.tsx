const Button = ({ title, onClick, color, type = "filled" }) => {
  return type === "outlined" ? (
    <div
      className="flex items-center justify-center w-full p-1 py-2 border-2 rounded-md cursor-pointer md:text-xl"
      onClick={onClick}
      style={{ color, borderColor: color }}
    >
      {title}
    </div>
  ) : (
    <div
      className="flex items-center justify-center w-full p-1 py-2 text-white rounded-md cursor-pointer md:text-xl"
      onClick={onClick}
      style={{ backgroundColor: color, color: "#fff" }}
    >
      {title}
    </div>
  );
};

export default Button;
