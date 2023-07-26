import { Button } from '@packages/button'

type CartModaLButttonsProps = {
  next?: () => void
  back?: () => void
  submit?: () => void
  loading?: boolean
  disabled?: boolean
}

export const CartModalButtons = ({
  next,
  back,
  submit,
  loading,
  disabled,
}: CartModaLButttonsProps) => {
  return (
    <div className='mt-4 flex w-full flex-col gap-2'>
      {next && (
        <Button className='w-full text-base' onClick={next}>
          Siguiente
        </Button>
      )}

      {submit && (
        <Button className='w-full text-base' onClick={submit} loading={loading} disabled={disabled}>
          Ir a Pagar
        </Button>
      )}

      {back && (
        <Button className='w-full text-base' type='outlined' onClick={back}>
          Atras
        </Button>
      )}
    </div>
  )
}
