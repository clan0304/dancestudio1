import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  teacherName: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Course', CourseSchema);
