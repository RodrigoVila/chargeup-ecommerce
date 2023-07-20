import { useTranslation } from 'react-i18next'

import { Button } from '@packages/button'

import { useAppActions } from '~hooks'

export const LoginButton = () => {
  const { openLoginModal } = useAppActions()

  const { t } = useTranslation()

  return (
    <Button onClick={openLoginModal} type="outlined">
      {t('LOGIN')}
    </Button>
  )
}
