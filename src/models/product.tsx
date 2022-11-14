import mongoose from 'mongoose';

const descriptionSchema = new mongoose.Schema({
  short: String,
  long: [String],
});
const nutritionalInfoSchema = new mongoose.Schema({
  calories: Number,
  carbs: Number,
  fat: Number,
  protein: Number,
});

const suitableForInfoSchema = new mongoose.Schema({
  glutenFree: Boolean,
  keto: Boolean,
  protein: Boolean,
  vegan: Boolean,
});

const productSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    description: descriptionSchema,
    nutritionalInfo: nutritionalInfoSchema,
    suitableForInfo: suitableForInfoSchema,
    price: String,
    imgUri: String,
    strapiId: String,
  },
  {
    collection: process.env.MONGO_PRODUCTS_COLLECTION,
  }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
