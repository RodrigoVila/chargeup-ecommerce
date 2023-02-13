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
  },
  {
    collection: process.env.MONGO_PASSWORD_RECOVERY_COLLECTION,
    timestamps: true
  }
);
const PasswordRecovery = mongoose.models.PasswordRecovery || mongoose.model('PasswordRecovery', passwordRecoverySchema);

export default PasswordRecovery;
