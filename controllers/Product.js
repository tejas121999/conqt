const { Product } = require("../models");

exports.createProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const createProduct = await Product.create(product);
    if (!createProduct) {
      return res.status(400).json({ msg: "something went's wrong" });
    } else {
      return res.status(200).json({ msg: "success", createProduct });
    }
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const getProduct = await Product.findAll({ where: { isDelete: false } });
    if (!getProduct) {
      return res.status(404).json({ msg: "data not found" });
    } else {
      return res.status(200).json({ msg: "success", getProduct });
    }
  } catch (error) {
    return res.status(500).json({ msg: "server error" });
  }
};
