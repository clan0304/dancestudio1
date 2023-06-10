import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  courseName: {
    type: String,
  },
  day: {
    type: String,
  },
  startTime: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', UserSchema);
