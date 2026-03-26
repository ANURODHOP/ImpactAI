const { calculateBMI } = require("../utils/calculations");

exports.getHealth = (req, res) => {
  const { weight, height } = req.body;

  const bmi = calculateBMI(weight, height);
  const score = Math.max(0, 100 - Math.abs(22 - bmi) * 2);

  res.send({ bmi, healthScore: score });
};