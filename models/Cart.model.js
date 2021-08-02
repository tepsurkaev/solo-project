const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  active: {
    type: Boolean,
    default: false,
  },
  products: [
    new mongoose.Schema({
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1
      },
    }),
  ],
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
