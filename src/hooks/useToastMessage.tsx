
export default function useToastMessage() {
  const successToastMessage = (message: string) => {
    return toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const errorToastMessage = (message: string) => {
    return toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return { successToastMessage, errorToastMessage };
}
