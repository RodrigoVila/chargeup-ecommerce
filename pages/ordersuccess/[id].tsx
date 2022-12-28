import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useAppActions from '@hooks/useAppActions';

import ErrorSuccess from '@main/ErrorSuccess';

const OrderSuccess = () => {
  const router = useRouter();
  const queryID = router.query.id;

  const trimmedID = queryID?.toString().substring(queryID.length - 5);

  const { clearCart } = useAppActions();

  useEffect(() => {
    clearCart();
  }, [queryID]);

  return queryID ? (
    <ErrorSuccess
      type="success"
      title={`Orden #${trimmedID} procesada correctamente`}
      subTitle="En instantes recibira un correo con la informacion de su pedido."
    />
  ) : null;
};

export default OrderSuccess;
