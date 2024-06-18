const Category = require('../models/category.model');

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const exists = await Category.find({ name: { $regex: new RegExp(name, "i") } });
    
    if (exists.length > 0) {
      return res.status(202).json({ message: 'Category already exists' });
    } else {
      const category = new Category({ name, description });
      await category.save();
      return res.status(201).json({ message: 'Category created successfully', category });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const getAllCategories = async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const skip = (page - 1) * limit;
    let query = {};
    if (status) {
      query = { status: true };
    }
    const categories = await Category.find(query).sort({ createdAt: 1 }).skip(skip).limit(limit);
    const totalItems = await Category.countDocuments(query);
    res.status(200).json({ status: 200, response: categories, totalItems, totalPages: Math.ceil(totalItems / limit), currentPage: page });
  } catch (error) {
    console.error("Error retrieving categories:", error);
    res.status(500).json({ status: 500, message: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, { name, description }, { new: true });
    res.status(200).json({ message: 'Category updated successfully', updatedCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategoryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: 'Category status updated successfully', updatedCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  deleteCategory,
  editCategory,
  updateCategoryStatus
};
