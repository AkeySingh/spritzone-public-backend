const Category = require("../models/Category");


const addCategory = async (req, res) => {
    try {
        const { categoryName, description } = req.body
        if (!categoryName) {
            res.status(400).join({ message: "please fill the category name." })
        } else {

            Category.create({ ...req.body }
            )
            res.status(201).json({ message: "Categoru added successfullly", Product: req.body });
        }

    }
    catch {
        console.error(error);
        res.status(500).json({ message: "Server Error" });

    }
}

const getCategory = async (req, res) => {
    try {
        const category = await Category.find({});
        res.json(category);
    }
    catch {
        console.error(error);
        res.status(500).json({ message: "Server Error" });

    }
}

const editCategory = async (req, res) => {


    try {
        console.log(req.params.id)

        res.status(200).join({ message: "message send clear" })

    }
    catch {

    }



}

module.exports = {
    addCategory,
    getCategory,
    editCategory
};
