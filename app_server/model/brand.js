const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  kdBrand: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 2,
  },
  namaB: { type: String, required: true },
});

module.exports = mongoose.model("Brand", BrandSchema);
