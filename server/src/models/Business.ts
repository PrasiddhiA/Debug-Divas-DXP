import mongoose from 'mongoose';

const BusinessSchema = new mongoose.Schema({
    name: String,
    owner: String,
    category: String,
    location: String,
});

export default mongoose.model('Business', BusinessSchema);
