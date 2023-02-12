import mongoose from 'mongoose';

export const passwordRecoverySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      index: { expires: '60m' },
    },
  },
  {
    collection: process.env.MONGO_PASSWORD_RECOVERY_COLLECTION,
  }
);
const PasswordRecovery = mongoose.models.PasswordRecovery || mongoose.model('PasswordRecovery', passwordRecoverySchema);

export default PasswordRecovery;
