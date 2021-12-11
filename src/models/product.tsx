import mongoose from "mongoose";

let productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    imgUri: {
      type: String,
    },
  },
  {
    collection: process.env.MONGO_PRODUCTS_COLLECTION,
  }
);

let Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
