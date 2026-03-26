const { calculateTDEE } = require("../utils/calculations");

exports.getGoals = (user) => {
  const calories = calculateTDEE(user.weight, user.height, user.age);

  return {
    calories,
    protein: user.weight * 2,
  };
};