import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  id:String,
  name: String,
  price: Number,
  quantity: Number,
});

let orderSchema = new mongoose.Schema(
  {
    id: String,
    buyerId: String,
    items: [itemSchema],
    totalAmount: Number,
  },
  {
    collection: process.env.MONGO_ORDERS_COLLECTION,
  }
);

let Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
