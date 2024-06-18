const categoryController = require("../controller/category.controller");

module.exports = function Route(app) {
    app.post("/api/category", categoryController.createCategory);
    app.get("/api/getCategory", categoryController.getAllCategories);
    app.delete("/api/category/:id", categoryController.deleteCategory);
    app.put("/api/category/:id", categoryController.editCategory);
    app.patch("/api/category/:id/status", categoryController.updateCategoryStatus);
};
