import { useIntl } from 'react-intl';

import { Button } from '@packages/button';

import { useAppActions } from '~hooks';

export const LoginButton = () => {
  const { openLoginModal } = useAppActions();

  const { formatMessage } = useIntl();

  return (
    <Button onClick={openLoginModal} type="outlined">
      {formatMessage({ id: 'LOGIN' })}
    </Button>
  );
};
