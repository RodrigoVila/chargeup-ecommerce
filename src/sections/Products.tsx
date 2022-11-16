import { FC, useState, useEffect } from 'react';
import { BsFilterCircle, BsFilterCircleFill } from 'react-icons/bs';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Product from '@main/Product';
import ProductSearchBar from '@main/ProductSearchBar';
import Section from '@main/Section';

const Products: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { products, filters } = useAppSelector();

  const { fetchProducts, openProductModal } = useAppActions();

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
    <Section id="products" bgImage="purpleTexture.jpeg">
      <div className="flex flex-wrap items-center justify-center h-full pb-2">
        <ProductSearchBar setSearchValue={setSearchValue} />
        {/* Filtros por tipo */}
        {/* {isFilterModalOpen ? (
          <BsFilterCircleFill
            size={33}
            color="white"
            className="cursor-pointer"
            onClick={closeModal}
          />
        ) : (
          <a href="#products">
            <BsFilterCircle
              size={33}
              color="white"
              className="cursor-pointer"
              onClick={openModal}
            />
          </a>
        )} */}
      </div>

      {products.length > 0 && (
        <div className="relative flex flex-wrap justify-center w-full mx-auto text-left">
          {filteredProducts.length > 0
            ? filteredProducts?.map((p) => (
                <Product
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  quantity={p.quantity}
                  imgUri={p.imgUri}
                  nutritionalInfo={p.nutritionalInfo}
                  suitableForInfo={p.suitableForInfo}
                  strapiId={p.strapiId}
                  onClick={() => openProductModal(p)}
                />
              ))
            : products.length > 0
            ? products?.map((p) => (
                <Product
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={p.description}
                  price={p.price}
                  quantity={p.quantity}
                  imgUri={p.imgUri}
                  nutritionalInfo={p.nutritionalInfo}
                  suitableForInfo={p.suitableForInfo}
                  strapiId={p.strapiId}
                  onClick={() => openProductModal(p)}
                />
              ))
            : ''}
        </div>
      )}
    </Section>
  );
};

export default Products;
