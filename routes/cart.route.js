const { Router } = require("express");
const { cartControllers } = require("../controllers/cart.controller");

const router = Router();

router.get("/cart", cartControllers.getCart);
router.post("/cart", cartControllers.createCart);
router.post("/cart/:id", cartControllers.addProductInCart);

module.exports = router;
