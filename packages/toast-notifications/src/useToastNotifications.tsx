import { toast, ToastOptions } from 'react-toastify'

const defaultOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'dark',
}

export const useToastNotifications = () => {
  const mergeOptions = (options?: ToastOptions): ToastOptions => ({
    ...defaultOptions,
    ...options,
  })

  const showSuccessNotification = (message: string, options?: ToastOptions) => {
    toast.success(message, mergeOptions(options))
  }

  const showErrorNotification = (message: string, options?: ToastOptions) => {
    toast.error(message, mergeOptions(options))
  }

  const showInfoNotification = (message: string, options?: ToastOptions) => {
    toast.info(message, mergeOptions(options))
  }

  const showWarningNotification = (message: string, options?: ToastOptions) => {
    toast.warning(message, mergeOptions(options))
  }

  return {
    showSuccessNotification,
    showErrorNotification,
    showInfoNotification,
    showWarningNotification,
  }
}
