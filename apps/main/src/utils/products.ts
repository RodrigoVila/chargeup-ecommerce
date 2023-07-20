import { LabelAndPriceType } from "~types";

export const getProductSubtotal = (
    selectedSize: LabelAndPriceType,
    selectedExtras: LabelAndPriceType[]
  ) => {
    if (!selectedSize || !selectedExtras) return 0;
    let extrasPrice = 0;
  
    selectedExtras.map((extra) => {
      if (extra.price) {
        extrasPrice += extra.price;
        return extra;
      } else {
        return extra;
      }
    });
  
    const subTotal = selectedSize.price + extrasPrice;
    return subTotal;
  };