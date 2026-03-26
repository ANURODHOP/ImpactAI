const Water = require("../models/WaterLog");

exports.addWater = async (req, res) => {
  const log = await Water.create({
    userId: req.user.id,
    ...req.body,
  });

  res.send(log);
};

exports.getProgress = async (req, res) => {
  const logs = await Water.find({ userId: req.user.id });

  const total = logs.reduce((sum, l) => sum + l.glasses, 0);

  res.send({ total, goal: 8 });
};