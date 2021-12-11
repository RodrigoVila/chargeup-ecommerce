const Button = ({ title, onClick, color, type = "filled" }) => {
  return type === "outlined" ? (
    <div
      className={`flex h-10 w-full md:text-xl items-center justify-center p-1 text-${color} border-${color} border-2 rounded-md cursor-pointer hover:bg-${color} hover:text-black transition duration-500 ease-in-out`}
      onClick={onClick}
    >
      {title}
    </div>
  ) : (
    <div
      className={`flex h-10 w-full md:text-xl items-center justify-center p-1 bg-${color} rounded-md cursor-pointer ml-4`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
