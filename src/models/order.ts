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


export const adressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: false,
  },
  streetNumber: {
    type: String,
    required: false,
  },
  extras: {
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
