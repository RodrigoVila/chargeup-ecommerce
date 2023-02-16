// Local storage keys
export const LOCAL_STORAGE_DATA_KEY = '@cub_data';
export const LOCAL_STORAGE_CART_KEY = '@cub_cart';

const isDevEnv = process.env.NODE_ENV === 'development';

// Keys
export const stripeSecretKey = isDevEnv
  ? process.env.STRIPE_SECRET_DEV_KEY
  : process.env.STRIPE_SECRET_KEY;

export const stripePublicKey = isDevEnv
  ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_DEV_KEY
  : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export const stripeWebhookKey = isDevEnv
  ? process.env.STRIPE_WEBHOOK_SECRET_DEV_KEY
  : process.env.STRIPE_WEBHOOK_SECRET_KEY;
