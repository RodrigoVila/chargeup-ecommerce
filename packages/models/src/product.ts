import mongoose from 'mongoose'

const descriptionSchema = new mongoose.Schema({
  short: String,
  long: [String],
})
const nutritionalInfoSchema = new mongoose.Schema({
  weight: Number,
  calories: Number,
  carbs: Number,
  fat: Number,
  protein: Number,
})

const suitableForInfoSchema = new mongoose.Schema({
  glutenFree: Boolean,
  keto: Boolean,
  protein: Boolean,
  vegan: Boolean,
})

const sizesExtrasSchema = new mongoose.Schema({
  label: String,
  price: Number,
})

const productSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: descriptionSchema,
    nutritionalInfo: nutritionalInfoSchema,
    suitableForInfo: suitableForInfoSchema,
    sizes: [sizesExtrasSchema],
    extras: [sizesExtrasSchema] || null,
    imgUri: String,
  },
  {
    collection: process.env.MONGO_PRODUCTS_COLLECTION,
  },
)

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
