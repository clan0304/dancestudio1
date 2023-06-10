import Course from '../models/Course.js';

export const createCourse = async (req, res) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateCourse = async (req, res) => {
  try {
    const updateCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateCourse);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json('A course is deleted successfully!');
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCourses = async (req, res) => {
  try {
    const getCourses = await Course.find();
    res.status(200).json(getCourses);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCourse = async (req, res) => {
  try {
    const getCourse = await Course.findById(req.params.id);
    res.status(200).json(getCourse);
  } catch (err) {
    res.status(500).json(err);
  }
};
