interface Props {
  text: string;
  onClick: () => void;
}

const Link = ({ text, onClick }: Props) => {
  return (
    <p
      className="flex items-center justify-center py-2 text-md font-bold text-center text-blue-500 cursor-pointer hover:text-blue-700"
      onClick={onClick}
    >
      {text}
    </p>
  );
};

export default Link;
