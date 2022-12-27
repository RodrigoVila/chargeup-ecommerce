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

let orderSchema = new mongoose.Schema(
  {
    id: String,
    email: String,
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

let Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
