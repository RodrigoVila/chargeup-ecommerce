import mongoose from 'mongoose';
const { Schema } = mongoose;

let userSchema = new Schema(
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
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    prefixNo: {
      type: String,
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
    location: {
      street: {
        type: String,
        required: false,
      },
      streetNumber: {
        type: String,
        required: false,
      },
      postCode: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: false,
      },
      province: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: false,
      },
      extras: {
        type: String,
        required: false,
      },
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

let User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
