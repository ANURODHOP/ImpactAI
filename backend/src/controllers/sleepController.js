const Sleep = require("../models/SleepLog");

exports.addSleep = async (req, res) => {
  const log = await Sleep.create({
    userId: req.user.id,
    ...req.body,
  });

  res.send(log);
};

exports.getTips = (req, res) => {
  res.send("Sleep 7-8 hours daily for best health");
};