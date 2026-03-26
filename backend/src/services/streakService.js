const Streak = require("../models/Streak");

exports.updateStreak = async (userId) => {
  let s = await Streak.findOne({ userId });

  if (!s) {
    s = await Streak.create({ userId, streak: 1 });
  } else {
    s.streak += 1;
    await s.save();
  }

  return s;
};