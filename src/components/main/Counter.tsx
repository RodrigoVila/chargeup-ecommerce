const Counter = ({ count, subtractOne, addOne, color= "white" }) => {
  const operClass = "mr-1 text-2xl leading-none cursor-pointer  p-2";
  return (
    <div className={`flex items-center my-1 mx-2 font-bold border border-${color} rounded-md`}>
      <div className={`${operClass}`} onClick={subtractOne}>
        -
      </div>
      <div className="mx-2 text-xl leading-none ">{count}</div>
      <div className={`${operClass}`} onClick={addOne}>
        +
      </div>
    </div>
  );
};

export default Counter;
