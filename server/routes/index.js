module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    require("./blog.routes")(app)
    require("./login.routes")(app)
    require("./category.routes")(app)
    
}