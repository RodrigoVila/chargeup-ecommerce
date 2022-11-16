import useMounted from '@hooks/useMounted';
import { useRouter } from 'next/router'
import ReactTooltip from 'react-tooltip'

function ActiveLink({ children, href }) {
  const { isMounted } = useMounted();
  const router = useRouter()
  const style = {
    color: router.asPath === href ? 'red' : 'black',
  }

  return (
    <>
       {isMounted ? <ReactTooltip /> : null}
      <a target="_blank" href={href} style={style} data-tip={href}>
        {children}
      </a>
    </>
  )
}

export default ActiveLink
