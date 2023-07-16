import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';
import { useEffect } from 'react';
import AdminProduct from './AdminProduct';
import AdminProductSearch from './AdminProductSearch';

const product_data = [
  {
    id: 1,
    name: 'Nueces Pecan',
    orderdetail1: '$18.55',
    orderdetail2: 'x Kg.',
    description:
      'Nueces Pecan BIO origen Francia, Paris. Batch#02665 .Proovedor: Catalunya Seeds (Barcelona)',
    num: '#0244',
    image: 'https://sc04.alicdn.com/kf/UTB83xRsE0oSdeJk43Owq6ya4XXaS.jpg',
  },
  // More people...
];

//JP levantar en esta var el name del array product_data
const currentProduct = 'Nueces Pecan Bio (FR)';

function AdminProducts() {
  const { products, areProductsLoading } = useAppSelector();

  const { fetchProducts } = useAppActions();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col">
      <AdminProductSearch />

      <div className="-my-2 overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden border-b border-gray-200 shadow bg-zinc-300 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Precio
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Nutritional Info
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Suitable For
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              {areProductsLoading
                ? 'Loading'
                : products.length > 0 && (
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <AdminProduct key={product.id} product={product} />
                      ))}
                    </tbody>
                  )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
