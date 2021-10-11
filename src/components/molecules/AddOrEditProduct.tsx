import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@atoms/Button";
import { addProductToDB } from "@services";
import Product from "./Product";

const className = "w-full h-10 pl-2 my-2";

const AddOrEditProduct = ({ editing }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [suitableForInfo, setSuitableForInfo] = useState([]);
  const [nutritionalInfo, setNutritionalInfo] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
    calories: 0,
  });

  const [imgUri, setImgUri] = useState("");

  const addProduct = () => {
    addProductToDB({
      id: uuidv4(),
      title,
      description,
      price,
      imgUri,
      suitableForInfo,
      nutritionalInfo,
    });
  };
  const editProduct = (product: any) => {};

  return (
    <div className="flex w-full p-4">
      <div className="flex-col w-1/2">
        <input
          type="text"
          placeholder="Titulo"
          className={className}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Descripcion"
            className={className}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Precio"
            className={className}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="URL de la imagen"
            className={className}
            value={imgUri}
            onChange={(e) => setImgUri(e.target.value)}
          />
        </div>
        {editing ? (
          <Button title="Editar" onClick={addProduct} color="yellow" />
        ) : (
          <Button title="Agregar" onClick={editProduct} color="green" />
        )}
      </div>
      <div className="items-center justify-center mx-auto ">
        <Product
          title={title}
          description={description}
          price={price}
          imgUri={imgUri}
          isPreview
        />
      </div>
    </div>
  );
};

export default AddOrEditProduct;
