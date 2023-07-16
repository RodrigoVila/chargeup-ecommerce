import { lang } from '@constants/lang';
import useAppActions from '@hooks/useAppActions';
import Button from './CustomButton';

const LoginButton = () => {
  const { openLoginModal } = useAppActions();

  return (
    <Button onClick={openLoginModal} type="outlined">
      {lang.en.LOGIN}
    </Button>
  );
};

export default LoginButton;
