export const isEmailValid = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const isPasswordValid = (password: string) => {
  const reg = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$', 'g');
  return reg.test(password);
};

export const getProductSubtotal = (
  selectedSize: ILabelAndPrice,
  selectedExtras: ILabelAndPrice[]
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
