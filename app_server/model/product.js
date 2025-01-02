const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  kdProduct: {
    type: String,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 8,
  },
  namaP: { type: String, required: true },
  deskripsi: { type: String, required: false },
  harga: [{ type: BigInt, required: true }],
  stok: [{ type: Number, required: true }],
  image_url: { type: String, required: true },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  brand_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
});

module.exports = mongoose.model("Product", bukuSchema);
