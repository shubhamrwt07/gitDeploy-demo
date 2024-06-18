const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  mainHeading: {
    type: String,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  image: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
  subContent: [{
    heading: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    }
  }],
  status: {
    type: Boolean,
    default: true
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
}, { timestamps: true });

const BlogModel = mongoose.model("Blog", blogSchema);

module.exports = BlogModel;
