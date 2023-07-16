import toast from 'react-hot-toast';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsExclamationOctagon } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';

import { ERROR_MESSAGE, INFO_MESSAGE, SUCCESS_MESSAGE } from '@constants/ActionTypes';
import { colors } from '@constants/colors';
import { ToastActionType, ToastStateType } from 'types';

const initialState: ToastStateType = {
  message: '',
  duration: 3000,
};

const toastReducer = (
  state: ToastStateType = initialState,
  action: ToastActionType
): ToastStateType => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      toast(action.message, {
        duration: action.duration || 3000,
        position: 'top-center',
        // Styling
        style: {
          padding: '20px 10px',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        },
        className: '',
        icon: <AiOutlineCheckCircle size={35} color={colors.success} />,
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      break;
    case ERROR_MESSAGE:
      toast(action.message, {
        duration: action.duration || 3000,
        position: 'top-center',
        // Styling
        style: {
          padding: '20px 10px',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        },
        className: '',
        // Custom Icon
        icon: <MdCancel size={35} color={colors.danger} />,
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      break;
    case INFO_MESSAGE:
      toast(action.message, {
        duration: action.duration || 3000,
        position: 'top-center',
        // Styling
        style: {
          padding: '20px 10px',
          borderRadius: '8px',
          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        },
        className: '',
        // Custom Icon
        icon: <BsExclamationOctagon size={30} color={colors.info} />,
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: '#000',
          secondary: '#fff',
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      break;
  }
  return state;
};

export default toastReducer;
