const { Brand } = require("../models/BrandModel");

exports.fetchBrands = async (req, res) => {
  try {
    const brands = await Brand.find({}).exec();
    res.status(200).json(brands);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.createBrand = async (req, res) => {
  const brand = new Brand(req.body);
  try {
    const doc = await brand.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(err);
  }
};
