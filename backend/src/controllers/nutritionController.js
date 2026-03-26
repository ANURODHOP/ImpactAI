const Nutrition = require("../models/NutritionLog");

exports.addLog = async (req, res) => {
  const log = await Nutrition.create({
    userId: req.user.id,
    ...req.body,
  });

  res.send(log);
};

exports.getLogs = async (req, res) => {
  const logs = await Nutrition.find({ userId: req.user.id });
  res.send(logs);
};