import { VerticalNavigation } from './VerticalNavigation'

const Sidebar = () => {
  return (
    <aside className='hidden border-r-2 border-r-slate-800 lg:block'>
      <VerticalNavigation />
    </aside>
  )
}

export default Sidebar
