const loginController = require("../models/login.model")
const bcrypt = require("bcrypt");


//signUp//
// const signUp = async (req, res) => {
//     try {
//         const { email, password, } = req.body;
//         const existingUser = await loginController.findOne({ email });
//         if (existingUser) {
//             return res.status(200).json({ status: "400", message: "Email Already Exists"});
//         }
//         else {
//             const hashedPassword = await bcrypt.hash(password, 9);
//             const result = await loginController.create({
//                 email,
//                 password: hashedPassword,                
//             });
//             return res.status(200).json({ status:"200",message:"User Created Successfully", response: result });
//         };
//     } catch (error) {
//         return res.status(500).json({ status: 500, message: error.message });
//     };
// };



const logIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await loginController.findOne({ email });
      if (!user) return res.status(400).json({ status: 400, message: "User not found" });
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) return res.status(400).json({ status: 400, message: "Invalid password" });
  
      res.status(200).json({ status: 200, message: "User logged in successfully", response: user });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Something went wrong", error: error.message });
    }
  };

  module.exports = {
    logIn,
    // signUp
  };