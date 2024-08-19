import ProductSearch from '~/components/ProductSearch'

function Products() {
  // const { products, areProductsLoading } = useAppSelector()

  // const { fetchProducts } = useAppActions()

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  return (
    <div className='flex flex-col'>
      <ProductSearch />

      <div className='-my-2 overflow-x-auto'>
        <div className='inline-block min-w-full py-2 align-middle'>
          <div className='overflow-hidden border-b border-gray-200 bg-zinc-300 shadow sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Producto
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Precio
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Nutritional Info
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                  >
                    Suitable For
                  </th>
                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>

              {/* {areProductsLoading
                ? 'Loading'
                : products.length > 0 && (
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {products.map((product) => (
                        <AdminProduct key={product._id} product={product} />
                      ))}
                    </tbody>
                  )} */}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
