const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct
} = require("../controller/productControllers");

router.get("/", getProducts);
router.post("/", addProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);


module.exports = router;
