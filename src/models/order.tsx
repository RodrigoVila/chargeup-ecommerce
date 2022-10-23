import mongoose from "mongoose";

let orderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
    },
  },
  {
    collection: process.env.MONGO_ORDERS_COLLECTION,
  }
);

let Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
