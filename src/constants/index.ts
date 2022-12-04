//Colors
export const colors = {
  black: '#000',
  danger: '#ff4444',
  disabled: '#b2b2b2',
  fuchsia: '#a21caf',
  info: '#33b5e5',
  overlay: 'rgba(0,0,0,0.5)',
  overlayDark: 'rgba(0,0,0,0.7)',
  overlayLight: 'rgba(0,0,0,0.2)',
  purple: '#a855f7',
  overlayPurple: 'rgba(168, 85, 247, 0.4)',
  overlayPurple2: 'rgba(168, 85, 247, 0.7)',
  success: '#21dbaa',
  white: '#fff',
};

// Initial state
export const AUTH_INITIAL_STATE = {
  isLoggedIn: false,
  isLoading: false,
  userLogin: {
    email: '',
    name: '',
    token: '',
  },
  validationEmailResponse: null,
  emailValidationError: null,
  isEmailValidated: null,
};

export const APP_USER_INITIAL_STATE: UserDetailsType = {
  id: '',
  name: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  mobileNo: '',
  prefixNo: '',
  prefContact: [],
  location: {
    street: '',
    streetNumber: '',
    postCode: '',
    city: '',
    province: '',
    country: '',
    extras: '',
  },
};

export const CART_INITIAL_STATE: ProductType = {
  _id: '',
  title: '',
  description: {
    short: '',
    long: [],
  },
  quantity: 0,
  price:{
    reg: 0,
    lg: 0,
    extras: null
  },
  imgUri: '',
  nutritionalInfo: {
    weight: 0,
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  },
  suitableForInfo: {
    protein: false,
    vegan: false,
    glutenFree: false,
    keto: false,
  },
  strapiId: '',
};

export const USERS_INITIAL_STATE: UsersStateType = {
  isLoading: false,
  user: APP_USER_INITIAL_STATE,
  users: [],
};

// Local storage keys
export const LOCAL_STORAGE_DATA_KEY = '@cub_data';
export const LOCAL_STORAGE_CART_KEY = '@cub_cart';

// Keys
export const stripeSecretKey =
  process.env.NODE_ENV === 'development'
    ? process.env.STRIPE_SECRET_DEV_KEY
    : process.env.STRIPE_SECRET_KEY;

export const stripePublicKey =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_DEV_KEY
    : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    export const stripeWebhookKey =
  process.env.NODE_ENV === 'development'
    ? process.env.STRIPE_WEBHOOK_SECRET_DEV_KEY
    : process.env.STRIPE_WEBHOOK_SECRET_KEY;

// Lang
export const lang = {
  es: {
    ALL_INPUTS_REQUIRED: 'Todos los campos son obligatorios.',
    CHANGE_PASSWORD: 'Modificar contraseña',
    CHANGE_USER_DATA: 'Modificar datos de usuario',
    CHANGE_USER_DATA_SUCCESS: 'Datos modificados!',
    CHANGE_USER_DATA_ERROR: 'Error al procesar sus datos. Por favor intente mas tarde.',
    CONTACT_FORM_SUCCESS: 'Formulario enviado con éxito. Le responderemos a la brevedad',
    CONTACT_FORM_ERROR: 'Error al enviar formulario. Por favor re intentar mas tarde',
    EMAIL: 'Email',
    EMAIL_CONFIRMED: 'Email validado exitosamente.',
    EMAIL_CONFIRMED_SUB: 'Ya puede iniciar sesion con sus credenciales.',
    EMAIL_NOT_CONFIRMED: 'El email no ha podido validarse.',
    EMAIL_NOT_CONFIRMED_SUB: 'Por favor intente luego o contacte al administrador.',
    GO_BACK: 'Volver atras',
    GO_TO_LOGIN: 'Volver al login',
    GO_HOME: 'Ir al inicio',
    INVALID_CREDENTIALS: 'Credenciales invalidas.',
    INVALID_EMAIL: 'Email invalido.',
    NAME: 'Nombre',
    LASTNAME: 'Apellido',
    LOCATION_STREET: 'Calle',
    LOCATION_STREET_NUMBER: 'Numero',
    LOCATION_POSTCODE: 'Codigo Postal',
    LOCATION_CITY: 'Ciudad',
    LOCATION_PROVINCE: 'Provincia',
    LOCATION_COUNTRY: 'Pais',
    LOCATION_EXTRAS: 'Informacion extra',
    LOGIN: 'Iniciar sesión',
    LOGOUT: 'Cerrar sesión',
    MOBILE_NUMBER: 'Numero de movil',
    NEW_PASSWORD: 'Nueva contraseña',
    OLD_PASSWORD: 'Contraseña antigua',
    PASSWORD: 'Contraseña',
    PASSWORD_REGEX:
      'La contraseña debe tener minimo 8 caracteres, al menos una mayuscula y al menos una minuscula',
    PASSWORDS_DONT_MATCH: 'Las contraseñas deben coincidir.',
    PREFIX_NUMBER: 'Prefijo',
    REPEAT_PASSWORD: 'Repetir Contraseña',
    SUBJECT: 'Asunto',
    UPDATE_USER_DATA: 'Modificar datos',
    UPDATE_USER_PASSWORD: 'Modificar contraseña',
    USER_EXIST: 'Email ya se encuentra registrado en nuestra base de datos.',
    USER_LOGIN_ERROR: 'Error en login. Por favor intente mas tarde o informe al administrador.',
    USER_LOGIN_SUCCESS: 'Login exitoso',
    USER_NOT_FOUND: 'Usuario no encontrado en nuestra BD',
    USER_REGISTER: 'Crear nueva cuenta',
    USER_REGISTER_ERROR:
      'Error al registrar. Por favor intente mas tarde o informe al administrador.',
    USER_REGISTER_SUCCESS:
      'Usuario creado con éxito. Hemos enviado un correo para verificar su cuenta.',
  },
  en: {
    ALL_INPUTS_REQUIRED: 'All inputs required',
    CHANGE_PASSWORD: 'Change password',
    CHANGE_USER_DATA: 'Change user data',
    CHANGE_USER_DATA_SUCCESS: 'User data modified!',
    CHANGE_USER_DATA_ERROR: 'Error while trying to modify data.  Please try again later.',
    CONTACT_FORM_SUCCESS: 'Form sent succesfully. We will contact you soon',
    CONTACT_FORM_ERROR: 'Form error. Please try again later',
    EMAIL: 'Email',
    EMAIL_CONFIRMED: 'Email confirmed.',
    EMAIL_CONFIRMED_SUB: 'You can login with your new credentials.',
    EMAIL_NOT_CONFIRMED: 'We can`t validate your email right now.',
    EMAIL_NOT_CONFIRMED_SUB: 'Please try again later or contact the admin.',
    GO_BACK: 'Back',
    GO_TO_LOGIN: 'Go back to login',
    GO_HOME: 'Go to home page',
    INVALID_CREDENTIALS: 'Invalid credentials.',
    INVALID_EMAIL: 'Invalid email.',
    NAME: 'Name',
    LASTNAME: 'Lastname',
    LOCATION_STREET: 'Street',
    LOCATION_STREET_NUMBER: 'St. Number',
    LOCATION_POSTCODE: 'Post Code',
    LOCATION_CITY: 'City',
    LOCATION_PROVINCE: 'Province',
    LOCATION_COUNTRY: 'Country',
    LOCATION_EXTRAS: 'Extra info',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    MOBILE_NUMBER: 'Mobile number',
    NEW_PASSWORD: 'New password',
    OLD_PASSWORD: 'Old password',
    PASSWORD: 'Password',
    PASSWORD_REGEX:
      'Password has to be minimum eight characters, at least one uppercase letter and one lowercase letter and one number:',
    PREFIX_NUMBER: 'Prefix',
    PASSWORDS_DONT_MATCH: 'Passwords dont match.',
    REPEAT_PASSWORD: 'Repeat Password',
    SUBJECT: 'Subject',
    UPDATE_USER_DATA: 'Update user data',
    UPDATE_USER_PASSWORD: 'Update user password',
    USER_EXIST: 'Email already exist in our database.',
    USER_LOGIN_ERROR: 'Login Error. Please try again later or contact website admin.',
    USER_LOGIN_SUCCESS: 'Login successful',
    USER_NOT_FOUND: 'User not found in our DB',
    USER_REGISTER: 'Create new account',
    USER_REGISTER_ERROR: 'Register Error. Please try again later or contact website admin.',
    USER_REGISTER_SUCCESS: 'User created successfuly. Please verify your email account.',
  },
  ca: {
    ALL_INPUTS_REQUIRED: '',
    CHANGE_PASSWORD: '',
    CHANGE_USER_DATA: '',
    CHANGE_USER_DATA_SUCCESS: '',
    CHANGE_USER_DATA_ERROR: '',
    CONTACT_FORM_SUCCESS: '',
    CONTACT_FORM_ERROR: '',
    EMAIL: '',
    EMAIL_CONFIRMED: '',
    EMAIL_CONFIRMED_SUB: '',
    EMAIL_NOT_CONFIRMED: '',
    EMAIL_NOT_CONFIRMED_SUB: '',
    GO_BACK: '',
    GO_TO_LOGIN: '',
    GO_HOME: '',
    INVALID_CREDENTIALS: '',
    INVALID_EMAIL: '',
    NAME: '',
    LASTNAME: '',
    LOCATION_STREET: '',
    LOCATION_STREET_NUMBER: '',
    LOCATION_POSTCODE: '',
    LOCATION_CITY: '',
    LOCATION_PROVINCE: '',
    LOCATION_COUNTRY: '',
    LOCATION_EXTRAS: '',
    LOGIN: '',
    LOGOUT: '',
    MOBILE_NUMBER: '',
    NEW_PASSWORD: '',
    OLD_PASSWORD: '',
    PASSWORD: '',
    PASSWORD_REGEX: '',
    PASSWORDS_DONT_MATCH: '',
    PREFIX_NUMBER: '',
    REPEAT_PASSWORD: '',
    SUBJECT: '',
    UPDATE_USER_DATA: '',
    UPDATE_USER_PASSWORD: '',
    USER_EXIST: '',
    USER_LOGIN_ERROR: '',
    USER_LOGIN_SUCCESS: '',
    USER_NOT_FOUND: '',
    USER_REGISTER: '',
    USER_REGISTER_ERROR: '',
    USER_REGISTER_SUCCESS: '',
  },
};
