import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: String,
    category: String,
    type: String,
    images: [String],
    sale: { type: String, default: null },
});

export const ProductModel = mongoose.model('Product', productSchema);
