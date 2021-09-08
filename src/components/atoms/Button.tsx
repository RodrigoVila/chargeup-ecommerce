const Button = ({ title, onClick, color }) => {
  return (
    <div
      className={`flex h-10 w-full items-center justify-center p-1 bg-${color}-400 rounded-md cursor-pointer ml-4`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Button;
