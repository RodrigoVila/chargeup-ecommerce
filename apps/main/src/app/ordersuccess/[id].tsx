import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppActions } from '~hooks'
import { ErrorSuccess } from 'app/emailvalidation/components/ErrorSuccess'

const OrderSuccess = () => {
  const router = useRouter()

  const queryID = router.query.id

  const trimmedID = queryID?.toString().substring(4, 11)

  const { clearCart } = useAppActions()

  useEffect(() => {
    clearCart()
  }, [queryID])

  return queryID ? (
    <ErrorSuccess
      type="success"
      title={`Orden #${trimmedID} procesada correctamente`}
      subTitle="En instantes recibira un correo con la informacion de su pedido."
      autoGoBackToHome
    />
  ) : null
}

export default OrderSuccess
