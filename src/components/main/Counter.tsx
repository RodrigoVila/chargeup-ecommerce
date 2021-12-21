const Counter = ({ count, subtractOne, addOne }) => {
  const operClass = "mx-1 text-2xl leading-none cursor-pointer";
  return (
    <div className="flex items-center px-2 py-2 border border-white rounded-md">
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
