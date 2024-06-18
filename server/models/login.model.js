const mongoose = require("mongoose");
const { Schema } = mongoose;

const loginModel = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },    
    },
    { versionKey: false, timestamps: true}
);

const login = mongoose.model("login", loginModel);

module.exports = login;