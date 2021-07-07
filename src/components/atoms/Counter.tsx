const Counter = ({ count, subtractOne, addOne }) => {
  return (
    <div className="flex items-center justify-center px-2 py-1 mb-2 border border-gray-300 rounded-sm">
      <div className="text-lg cursor-pointer" onClick={subtractOne}>
        -
      </div>
      <div className="mx-2">{count}</div>
      <div className="text-lg text-black cursor-pointer" onClick={addOne}>
        +
      </div>
    </div>
  );
};

export default Counter;
