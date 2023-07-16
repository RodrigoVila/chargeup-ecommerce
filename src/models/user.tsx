import mongoose from 'mongoose';
import { orderSchema, adressSchema } from './order';


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
      required: false,
    },
    googleAccount: {
      type: Boolean,
      default: false,
      required: false,
    },
    pid: {
      type: String,
      required: false,
    },
    orders: {
      type: [orderSchema],
      required: false,
    },
    mobileNo: {
      type: String,
      required: false,
    },
    prefContact: {
      type: [String],
      required: false,
    },
    address: {
      type: adressSchema,
      required: false
    },
    token: {
      type: String,
      required: false,
    },
    since: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: process.env.MONGO_USERS_COLLECTION,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
