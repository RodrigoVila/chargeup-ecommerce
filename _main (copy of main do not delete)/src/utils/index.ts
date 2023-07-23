export { dbConnect } from './dbConnect'
export { encryptPassword, compareHashedPassword } from './encrypt'
export { newOrderToHTML, emailVerificationToHTML, passwordRecoveryToHTML } from './htmlEmailParsers'
export {
  getValueFromLocalStorage,
  setValueToLocalStorage,
  deleteValueFromLocalStorage,
  clearLocalStorage,
} from './localStorage'
// export { sendEmailToUser } from './nodemailer'
export { getProductSubtotal } from './products'
export { isEmailValid, isPasswordValid } from './validation'
