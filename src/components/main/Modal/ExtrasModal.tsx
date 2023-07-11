import { useState, useEffect } from 'react';

import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

import Modal from '@shared/Modal';
import Button from '@shared/Buttons/CustomButton';
import CloseModalButton from '@shared/Buttons/CloseModalButton';
import Counter from '@main/Counter';
import Dropdown from '@main/Dropdown';
import Checkbox from '@main/Checkbox';
import { getProductSubtotal } from '@utils/index';
import { CartProductType, ILabelAndPrice } from 'types';

const ExtrasModal = () => {
  const [isDropdownOpen, setDropdownOepn] = useState(false);

  // Product specification before adding it to cart
  const [itemCount, setItemCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState<ILabelAndPrice| null>(null);
  const [selectedExtras, setSelectedExtras] = useState<ILabelAndPrice[]>([]);

  const { isExtrasModalOpen, selectedModalProduct } = useAppSelector();
  const { displayInfoMessage, displaySuccessMessage, addToCart, closeExtrasModal } =
    useAppActions();

  const onItemCountChange = (type: string) => {
    if (type === 'add') {
      setItemCount((prevCount) => prevCount + 1);
    } else {
      if (itemCount < 2) return;
      setItemCount((prevCount) => prevCount - 1);
    }
  };

  const onSizeChange = (size: ILabelAndPrice) => setSelectedSize(size);

  const onExtrasChange = (extra: ILabelAndPrice) => {
    const index = selectedExtras.findIndex((el) => el.label === extra.label);
    index === -1
      ? setSelectedExtras((prevExtras) => [...prevExtras, extra])
      : setSelectedExtras((prevExtras) => prevExtras.filter((ex) => ex.label !== extra.label));
  };

  const onClose = () => closeExtrasModal();

  const closeDropdown = () => setDropdownOepn(false);

  const subTotal = getProductSubtotal(selectedSize, selectedExtras);
  const total = subTotal * itemCount;

  const addItemToCart = () => {
    const { title } = selectedModalProduct;

    if (itemCount === 0) {
      displayInfoMessage('La cantidad tiene que ser mayor a 0');
      return;
    }

    // It's just an ID that will be used to update/remove cart items. If it's exactly the same item, it updates it. If not, it add a new variant.
    const getUniqueID = () => {
      let extrasString = [];
      selectedExtras.map((extra) => extrasString.push(extra.label));
      const sorted = extrasString.sort();
      return btoa(`${title},${selectedSize.label},${sorted}`);
    };
    const cartProduct: CartProductType = {
      id: getUniqueID(),
      title,
      selectedSize,
      selectedExtras,
      quantity: itemCount,
      subTotal,
      total,
    };

    addToCart(cartProduct);
    displaySuccessMessage('Producto agregado!');
  };

  useEffect(() => {
    selectedModalProduct && setSelectedSize(selectedModalProduct.sizes[0]);
  }, [selectedModalProduct]);

  useEffect(() => {
    if (!isExtrasModalOpen) {
      setSelectedExtras([]);
      setItemCount(1);
    }
  }, [isExtrasModalOpen]);

  const labelStyle = 'text-md font-bold';

  return (
    <Modal isOpen={isExtrasModalOpen} transparent fullScreen>
      <div
        className="relative flex flex-col w-full gap-2 bg-white rounded-md xl:p-2 xl:pt-4"
        onClick={closeDropdown}
      >
        <CloseModalButton
          color="black"
          onClose={onClose}
          isAbsolute
          position="right"
          className="mt-1 mr-1"
        />
        <h3 className="mt-2 text-xl font-semibold text-center xl:my-4">
          {selectedModalProduct?.title}
        </h3>
        <div className="flex flex-col flex-wrap items-start mx-4 mt-4">
          {/* sizes dropdown */}
          {selectedModalProduct?.sizes ? (
            <div className="flex flex-col justify-center">
              <h6 className={labelStyle}>Presentacion</h6>
              <Dropdown
                name="sizes"
                label={selectedSize?.label}
                options={selectedModalProduct?.sizes}
                onChange={onSizeChange}
              />
            </div>
          ) : null}
          {/* extras dropdown */}
          {selectedModalProduct?.extras.length > 0 ? (
            <div className="flex flex-col justify-center w-full mt-4">
              <h6 className={labelStyle}>Extras</h6>
              {selectedModalProduct?.extras?.map((extra, index) => (
                <Checkbox
                  key={`${index}${extra}`}
                  label={`${extra.label} (+ € ${extra.price.toFixed(2)})`}
                  onChange={() => onExtrasChange(extra)}
                />
              ))}
            </div>
          ) : null}

          <div className="flex items-center justify-between w-full mt-4 mr-4">
            <Counter
              count={itemCount}
              addOne={() => onItemCountChange('add')}
              subtractOne={() => onItemCountChange('sub')}
            />
            {/* Price */}
            <div className="flex flex-col items-end justify-center mr-3">
              <h6 className="text-xl">Total</h6>
              <h3 className="text-3xl">{`€${total.toFixed(2)}`}</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-4 xl:p-0 xl:py-2">
          <Button onClick={addItemToCart}>Agregar</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ExtrasModal;
