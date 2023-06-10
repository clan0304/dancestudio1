import Price from '../models/Price.js';

export const createPrice = async (req, res) => {
  const newPrice = new Price(req.body);
  try {
    const createPrice = await newPrice.save();
    res.status(200).json(createPrice);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updatePrice = async (req, res) => {
  try {
    const updatePrice = await Price.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatePrice);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getPrice = async (req, res) => {
  try {
    const getPrice = await Price.find();
    res.status(200).json(getPrice);
  } catch (err) {
    res.status(500).json(err);
  }
};
