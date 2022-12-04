import useAppActions from '@hooks/useAppActions';
import Image from 'next/image';

interface Props {
  product: ProductType;
}

const iconClassName =
  'mx-auto text-xl cursor-pointer hover:text-red-500 transition duration-500 ease-in-out';

const AdminProduct = ({ product }: Props) => {
  const {
    title,
    description,
    nutritionalInfo,
    suitableForInfo,
    price,
    imgUri,
  } = product;

  const { openAdminProductModal } = useAppActions();

  const handleEditing = () => openAdminProductModal(product);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          {/* Imagen */}
          <div className="relative flex-shrink-0 w-10 h-10">
            <Image objectFit="cover" layout="fill" src={`/${imgUri}.jpg`} alt="" />
          </div>
          {/* Titulo */}
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{title}</div>
          </div>
        </div>
      </td>
      {/* Precio */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{`€${price.reg}`}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {nutritionalInfo.calories && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {`Cal: ${nutritionalInfo.calories}`}
          </span>
        )}
        {nutritionalInfo.carbs && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {`Carbs: ${nutritionalInfo.carbs}`}
          </span>
        )}
        {nutritionalInfo.fat && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {`Fat: ${nutritionalInfo.fat}`}
          </span>
        )}
        {nutritionalInfo.protein && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {`Prot: ${nutritionalInfo.protein}`}
          </span>
        )}
        {nutritionalInfo.weight && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
            {`Weight: ${nutritionalInfo.weight}`}
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {suitableForInfo.glutenFree && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-blue-100 rounded-full">
            GF
          </span>
        )}
        {suitableForInfo.keto && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-blue-100 rounded-full">
            Keto
          </span>
        )}
        {suitableForInfo.protein && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-blue-100 rounded-full">
            HP
          </span>
        )}
        {suitableForInfo.vegan && (
          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-blue-100 rounded-full">
            V
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <button
          onClick={handleEditing}
          type="button"
          className="px-3 py-2 m-1 text-xs rounded-full shadow-xl bg-zinc-800 text-zinc-300 shadow-zinc-400/50"
        >
          Modificar
        </button>
      </td>
    </tr>
  );
};

export default AdminProduct;
