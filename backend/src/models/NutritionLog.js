const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  protein: Number,
  calories: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("NutritionLog", schema);