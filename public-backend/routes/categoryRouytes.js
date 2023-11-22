const express = require("express");
const router = express.Router();
const { addCategory, getCategory, editCategory } = require('../controller/categoryController')



router.post("/", addCategory);
router.get("/", getCategory);
router.put("/:id", editCategory);


module.exports = router;
