// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import { ERROR_MESSAGE, SUCCESS_MESSAGE, INFO_MESSAGE } from "../actions/types";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsExclamationOctagon } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const initialState: ToastStateType = {
  message: "",
};

const toastReducer = (
  //Tipo OK, necesitamos el state del cart
  state: ToastStateType = initialState,
  //Action OK. action.article.algo
  action: ToastActionType
): ToastStateType => {
  switch (action.type) {
    case SUCCESS_MESSAGE:
      toast(action.message, {
        duration: 3000,
        position: "top-center",
        // Styling
        style: {
          backgroundColor: "#21dbaa",
          color: "#fff",
        },
        className: "",
        // Custom Icon
        icon: <AiOutlineCheckCircle size={26} />,
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      break;
    case ERROR_MESSAGE:
      toast(action.message, {
        duration: 3000,
        position: "top-center",
        // Styling
        style: {
          backgroundColor: "#ff4444",
          color: "#fcfcfc",
        },
        className: "",
        // Custom Icon
        icon: <MdCancel size={26} />,
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      break;
    case INFO_MESSAGE:
      toast(action.message, {
        duration: 3000,
        position: "top-center",
        // Styling
        style: {
          backgroundColor: "#33b5e5",
          color: "#fcfcfc",
        },
        className: "",
        // Custom Icon
        icon: <BsExclamationOctagon size={26} />,
        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
      break;
  }
  return state;
};

export default toastReducer;
