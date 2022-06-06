const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    descrip: { type: String, required: true, unique: true },
    duration:{type: String},
    price: { type: Number, required: true },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);