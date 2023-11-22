const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


const addProduct = async (req, res) => {
  try {
    const { name, description, countInStock, price, imageUrl } = req.body
    if (!name && !description && !countInStock && !price && !imageUrl) {
      res.send('please fill all the filled properly')
    } else {
      Product.create({ ...req.body })
      res.status(201).json({ message: "Product added successfullly", Product: req.body })
      console.log("Product add succesfully")
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};








const updateProduct = (req, res) => {
  const docs = req.body
  Product.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body },
    { includeResultMetadata: true },
    (err, docs) => {
      if (!err) {
        res.status(200).json({ message: "Product update successfullly", Product: docs })
      } else {
        res.status(404).json({ message: err, })
      }
    }
  )
}

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct
};
