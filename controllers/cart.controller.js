const Cart = require("../models/Cart.model");

module.exports.cartControllers = {
  getCart: async (req, res) => {
    try {
      const cart = await Cart.find().populate({
        path: "products",
        model: "Cart",
        populate: {
          path: "productId",
          model: "Product",
        },
      });

      return res.json(cart);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  createCart: async (req, res) => {
    const { active, products } = req.body;

    if (active === null) {
      return res.status(400).json({
        error: "You need to set status",
      });
    }

    if (!products) {
      return res.status(400).json({
        error: "You need to set product",
      });
    }

    const cart = await Cart.create({
      active,
      products,
    });

    return res.json(cart);
  },

  addProductInCart: async (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: "You need to set ID",
      });
    }

    try {
      const inCart = await Cart.updateOne(
        { _id: id },
        {
          $addToSet: { products: { ...req.body } },
        }
      );

      await res.json(inCart);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
