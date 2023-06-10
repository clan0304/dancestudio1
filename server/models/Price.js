import mongoose from 'mongoose';

const PriceSchema = new mongoose.Schema({
  singlePrice: {
    type: Number,
    required: true,
  },
  monthlyPass: {
    type: Number,
    required: true,
  },
  threeMonthPass: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Price', PriceSchema);
