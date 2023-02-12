import mongoose from 'mongoose';

const LabelPrice = new mongoose.Schema({
  label: String,
  price: Number,
});

const itemSchema = new mongoose.Schema({
  id: String,
  title: String,
  selectedSize: LabelPrice,
  selectedExtras: [LabelPrice],
  quantity: Number,
  subTotal: Number,
  total: Number,
});

export const orderSchema = new mongoose.Schema(
  {
    id: String,
    email: String,
    name: String,
    items: [itemSchema],
    totalAmount: Number,
    paidAmount:Number|| null,
    buyerEmail:String|| null,
    status:String,
    created: Date,
    orderSent: Boolean
  },
  {
    collection: process.env.MONGO_ORDERS_COLLECTION,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
