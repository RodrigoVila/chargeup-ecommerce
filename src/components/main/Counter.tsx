import { FC } from 'react';

type Props = {
  count: number;
  subtractOne: () => void;
  addOne: () => void;
  color?: string;
};

const Counter: FC<Props> = ({ count, subtractOne, addOne, color = 'black' }) => {
  const operClass = 'mr-1 text-2xl leading-none cursor-pointer  p-2';
  return (
    <div className={`my-1 flex items-center border font-bold border-${color} rounded-md`}>
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
