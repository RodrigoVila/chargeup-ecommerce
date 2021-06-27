import { useState } from "react";
import Sidebar from "@molecules/Sidebar";
import AddOrEditProduct from "@molecules/AddOrEditProduct";
import ProductList from "@organisms/ProductList";

const title = "text-3xl text-center";

const AdminPage = () => {
  const [editing, setEditing] = useState(false);

  const editProduct = (product: any) => {
    setEditing(true);
    console.log(product);
  };

  return (
    <div className="">
      <Sidebar />
      <div className="flex flex-col w-full h-full pl-2 ml-20 bg-pink-300">
        <div className={title}>Lista de productos</div>
        <ProductList canEdit editProduct={editProduct} />
        <div className={title}>
          {editing ? "Editar Producto" : "Agregar Nuevo Producto"}
        </div>
        <AddOrEditProduct editing={editing} />
      </div>
    </div>
  );
};

export default AdminPage;
