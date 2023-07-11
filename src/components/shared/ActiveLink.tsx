import Link from 'next/link';
import { useRouter } from 'next/router';
import useMounted from '@hooks/useMounted';

const ActiveLink = ({ children, href }) => {
  const { isMounted } = useMounted();
  const router = useRouter();
  const style = {
    color: router.asPath === href ? 'red' : 'black',
  };

  return (
    <Link target="_blank" href={href} style={style}>
      {children}
    </Link>
  );
};

export default ActiveLink;
