const loginController = require("../controller/login.controller")


module.exports = function Route(app) {
    app.post("/api/logIn",loginController.logIn);
    // app.post("/api/signUp",loginController.signUp);

   
    
   
}