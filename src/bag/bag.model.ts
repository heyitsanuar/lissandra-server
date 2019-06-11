import mongoose from 'mongoose';

const bagSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
});

export const BagModel = mongoose.model('Bag', bagSchema);
