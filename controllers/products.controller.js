const Product = require("../models/Product.model");

module.exports.productsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();

      return res.json(products);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({
          error: "Product with that id not found",
        });
      }
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  createProduct: async (req, res) => {
    const { name, volume, price, img, amount } = req.body;

    if (!name && !volume && !price && !img && !amount) {
      return res.status(400).json({
        error: "You need to set name, volume and price to new product",
      });
    }

    try {
      const product = await Product.create({
        name,
        volume,
        price,
        img,
        amount,
      });

      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const deleted = await Product.findByIdAndRemove(id);

      if (!deleted) {
        return res.status(400).json({
          error: "Can't find product with that ID. Set correct ID",
        });
      }

      return res.json({
        message: "Product successfully deleted",
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const edited = await Product.findOneAndUpdate(
        { _id: id },
        { $set: { ...req.body } }
      );

      if (!edited) {
        return res.status(400).json({
          error: "Can't edit values. Please check your ID",
        });
      }

      return res.json(edited);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
