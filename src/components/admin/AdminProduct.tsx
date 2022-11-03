import { useState } from "react";
import { GrEdit } from "react-icons/Gr";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  key?: number;
  title: string;
  description: string;
  price: any;
  imgUri: string;
}

const iconClassName =
  "mx-auto text-xl cursor-pointer hover:text-red-500 transition duration-500 ease-in-out";

const AdminProduct = ({ title, description, price, imgUri }: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="py-2 text-center border-b-2 border-blue-900 grid grid-cols-6 gap-4">
      <div className="h-full">{title}</div>
      <div>{description}</div>
      <div>{price}</div>
      <a>{imgUri || "No URI"}</a>
      <GrEdit className={iconClassName} onClick={handleModal} />
      <RiDeleteBin6Line className={iconClassName} />
    </div>
  );
};

export default AdminProduct;
