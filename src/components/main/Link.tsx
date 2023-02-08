interface Props {
  text: string;
  onClick: () => void;
}

const Link = ({ text, onClick }: Props) => {
  return (
    <a
      className="flex items-center justify-center py-2 text-sm font-bold text-center text-blue-500 cursor-pointer hover:text-blue-700"
      onClick={onClick}
    >
      {text}
    </a>
  );
};

export default Link;
