const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  hours: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("SleepLog", schema);