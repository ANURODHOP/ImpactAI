const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  streak: { type: Number, default: 0 },
});

module.exports = mongoose.model("Streak", schema);