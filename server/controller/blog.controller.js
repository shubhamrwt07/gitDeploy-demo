const BlogModel = require("../models/blog.model");
const CategoryModel = require("../models/category.model")
const s3upload = require("../controller/s3.upload.controller");
const mongoose = require("mongoose");

const createBlog = async (req, res) => {
  try {
    const imageUrl = await s3upload.uploadS3(req.file);
    const blog = await BlogModel.create({ ...req.body, image: imageUrl });
    res.status(200).json({ status: 200, message: "Blog added successfully", response: blog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};

const getOneBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    if (!blog) return res.status(404).json({ status: 404, message: "Blog not found" });
    res.status(200).json({ status: 200, response: blog });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

const getBlogByUrl = async (req, res) => {
  const url = req.params.url;
  if (!/^[a-zA-Z0-9-_]+$/.test(url)) {
    return res.status(400).json({ status: 400, message: "Invalid URL format" });
  }
  try {
    const blog = await BlogModel.findOne({ url }).lean();

    if (!blog) {
      return res.status(404).json({ status: 404, message: "Blog not found" });
    }

    return res.status(200).json({ status: 200, response: blog });
  } catch (error) {
    console.error("Error in getBlogByUrl:", error);
    return res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, status, categorys, user } = req.query;
    const skip = (page - 1) * Number(limit);
    const query = {};

    if (search) {
      query.mainHeading = { $regex: new RegExp(search.trim(), "i") };
    }

    if (status) {
      query.status = status;
    }

    if (categorys === '' && user) {
      const inactiveCategories = await CategoryModel.find({ status: false }).select('_id');
      query.categoryId = { $nin: inactiveCategories.map(cat => cat._id) };
    } else if (categorys) {
      query.categoryId = categorys;
    }

    let blogsQuery = BlogModel.find(query).populate("categoryId").sort({ createdAt: -1 });

    const totalItems = await BlogModel.countDocuments(query);

    if (skip > 0) {
      blogsQuery = blogsQuery.skip(skip);
    }
    if (limit > 0) {
      blogsQuery = blogsQuery.limit(Number(limit));
    }

    const blogs = await blogsQuery;

    res.status(200).json({
      status: 200,
      response: blogs,
      totalItems,
      totalPages: Math.ceil(totalItems / Number(limit)),
      currentPage: Number(page)
    });

  } catch (error) {
    console.error("Error retrieving blogs:", error);
    res.status(500).json({ status: 500, message: error.message });
  }
};


const getRandomBlogs = async (req, res) => {
  try {
    const url = req.params.url;
    if (!/^[a-zA-Z0-9-_]+$/.test(url)) {
      return res.status(400).json({ status: 400, message: "Invalid URL format" });
    }
    const currentBlog = await BlogModel.findOne({ url });
    if (!currentBlog) {
      return res.status(404).json({ status: 404, message: "Blog not found" });
    }

    const id = currentBlog._id;
    const blogCount = await BlogModel.countDocuments({ _id: { $ne: id } });
    if (blogCount < 2) {
      return res.status(400).json({ status: 400, message: "Not enough blogs to select from" });
    }
    let randomIndices = [];
    while (randomIndices.length < 2) {
      const randomIndex = Math.floor(Math.random() * blogCount);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const nextBlogs = await BlogModel.aggregate([
      { $match: { _id: { $ne: id } } },
      { $skip: randomIndices[0] },
      { $limit: 2 }
    ]);

    res.status(200).json({ status: 200, response: nextBlogs });
  } catch (error) {
    console.error("Error in getRandomBlogs:", error);
    res.status(500).json({ status: 500, message: error.message });
  }
};



const updateBlog = async (req, res) => {
  try {
    let data = req.body;
    const { id } = req.params;
    if (req.file) {
      let image = await s3upload.uploadS3(req.file);
      data.image = image;
    }
    const updatedBlog = await BlogModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).json({ status: 200, message: "Blog updated successfully", response: updatedBlog });
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};


// Delete Blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ status: 404, message: "Blog not found" });
    res.status(200).json({ status: 200, message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

module.exports = {
  createBlog,
  getOneBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getRandomBlogs,
  getBlogByUrl
};
