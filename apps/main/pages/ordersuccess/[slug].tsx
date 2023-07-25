import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAppActions } from '~hooks'
import { ErrorSuccess } from '~components/ErrorSuccess'

const OrderSuccess = () => {
  const router = useRouter()

  const {slug} = router.query

  const trimmedID = slug?.toString().substring(4, 11)

  const { clearCart } = useAppActions()

  useEffect(() => {
    clearCart()
  }, [slug])

  return slug ? (
    <ErrorSuccess
      type="success"
      title={`Orden #${trimmedID} procesada correctamente`}
      subTitle="En instantes recibira un correo con la informacion de su pedido."
      autoGoBackToHome
    />
  ) : null
}

export default OrderSuccess
