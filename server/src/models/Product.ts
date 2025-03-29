import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    sellerId: String,
});

export default mongoose.model('Product', ProductSchema);
