const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    countInStock: {
      type: Number,
      require: true,
    },
    rating: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
