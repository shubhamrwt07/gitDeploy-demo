const blogController = require("../controller/blog.controller")
const { imagesUpload } = require("../middleware/multer")

module.exports = function Route(app) {
    app.post("/api/createBlog", imagesUpload.single('image'), blogController.createBlog);
    app.get("/api/getAllBlogs", blogController.getAllBlogs);
    app.get("/api/getBlog/:id", blogController.getOneBlog);
    app.get("/api/getBlogByUrl/:url", blogController.getBlogByUrl);
    app.put("/api/updateBlog/:id", imagesUpload.single('image'), blogController.updateBlog);
    app.delete("/api/deleteBlog/:id", blogController.deleteBlog);
    app.get("/api/blogs/next/:url", blogController.getRandomBlogs);
};