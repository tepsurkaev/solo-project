const { Router } = require("express");
const productRoutes = require("./products.route");
const cartRoutes = require("./cart.route");

const router = Router();

router.use(productRoutes);
router.use(cartRoutes);

module.exports = router;
