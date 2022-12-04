const Counter = ({ count, subtractOne, addOne, color= "white" }) => {
  const operClass = "mr-1 text-2xl leading-none cursor-pointer  p-2";
  return (
    <div className={`flex items-center my-1 mx-2 font-bold border border-${color} rounded-md`}>
      <button className={`${operClass}`} onClick={subtractOne}>
        -
      </button>
      <div className="mx-2 text-xl leading-none ">{count}</div>
      <button className={`${operClass}`} onClick={addOne}>
        +
      </button>
    </div>
  );
};

export default Counter;
