import { Card } from './Card'

function Stats() {
  return (
    <div className='mx-auto flex max-w-xl flex-col gap-3 rounded-md border-2 border-slate-500 p-8'>
      <h1 className=' text-center text-2xl font-bold uppercase tracking-wide text-violet-500'>
        Estadisticas de los últimos 30 dias
      </h1>
      <div className='flex h-full w-full items-center gap-2'>
        <Card title='Ventas del mes' content='54' />
        <Card title='Total mensual' content='$7.000' />
        <Card title='Nuevos clientes' content='14' />
      </div>
    </div>
  )
}
export default Stats
