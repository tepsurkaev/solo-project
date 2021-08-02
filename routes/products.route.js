const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.get("/products", productsController.getAllProducts);
router.get("/product/:id", productsController.getProductById);
router.post("/product", productsController.createProduct);
router.delete("/product/:id", productsController.removeProduct);
router.patch("/product/:id", productsController.editProduct);

module.exports = router;
