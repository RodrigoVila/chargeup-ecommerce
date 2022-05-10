import mongoose from "mongoose";
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
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
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

let User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
