import mongoose from 'mongoose';
import { adressSchema } from './user';

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
    phone: String,
    address: adressSchema,
    items: [itemSchema],
    totalAmount: Number,
    paidAmount: Number || null,
    status: String,
    created: Date,
    orderSent: Boolean,
  },
  {
    collection: process.env.MONGO_ORDERS_COLLECTION,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
