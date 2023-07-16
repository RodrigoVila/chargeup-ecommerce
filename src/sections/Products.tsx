import { FC, useEffect, useState } from 'react';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Product from '@main/Product';
import ProductSearchBar from '@main/ProductSearchBar';
import Section from '@main/Section';
import Spinner from '@shared/Spinner';

const Products: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const { products, filters } = useAppSelector();

  const { fetchProducts } = useAppActions();

  const clearFilters = () => setFilteredProducts([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // TODO: Los filtros se seleccionan en el modal OK y guardan su state en Redux. Falta que impacten en este componente
  useEffect(() => {
    const filterByProductName = () => {
      const filter = products.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      searchValue.length > 1 ? setFilteredProducts(filter) : clearFilters();
    };

    filterByProductName();
  }, [searchValue]);

  useEffect(() => {
    const filterByType = () => {
      if (filters.length > 0) {
        filters.map((f) => {
          const filter = products.filter((product) =>
            product.title.toLowerCase().includes(f.toLowerCase())
          );
          setFilteredProducts(filter);
        });
      } else {
        clearFilters();
      }
    };

    filterByType();
  }, [filters]);

  return (
    <Section id="products" bgImage="purpleTexture.jpeg" disabled={!products} noCenter>
      <div className="flex flex-wrap items-center justify-center h-full pb-2">
        <ProductSearchBar setSearchValue={setSearchValue} />
      </div>
      {products.length > 0 ? (
        <div className="relative flex flex-wrap justify-center w-full mx-auto text-left">
          {filteredProducts.length > 0
            ? filteredProducts?.map((product) => <Product key={product._id} product={product} />)
            : products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full mt-20">
          <Spinner />
          Loading products...
        </div>
      )}
    </Section>
  );
};

export default Products;
