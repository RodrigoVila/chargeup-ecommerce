import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactTooltip from 'react-tooltip';
import useMounted from '@hooks/useMounted';

const ActiveLink = ({ children, href }) => {
  const { isMounted } = useMounted();
  const router = useRouter();
  const style = {
    color: router.asPath === href ? 'red' : 'black',
  };

  return (
    <>
      {isMounted ? <ReactTooltip /> : null}
      <Link target="_blank" href={href} style={style} data-tip={href}>
        {children}
      </Link>
    </>
  );
};

export default ActiveLink;
