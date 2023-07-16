import useAppActions from '@hooks/useAppActions';
import { useTranslation } from 'react-i18next';
import Button from './CustomButton';

const LoginButton = () => {
  const { openLoginModal } = useAppActions();

  const { t } = useTranslation();

  return (
    <Button onClick={openLoginModal} type="outlined">
      {t('LOGIN')}
    </Button>
  );
};

export default LoginButton;
