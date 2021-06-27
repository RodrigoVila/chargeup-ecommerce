import mongoose from "mongoose";
const { Schema } = mongoose;

let userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
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
