const Nutrition = require("../models/NutritionLog");

exports.getWeekly = async (req, res) => {
  const data = await Nutrition.aggregate([
    { $match: { userId: req.user.id } },
    {
      $group: {
        _id: null,
        totalCalories: { $sum: "$calories" },
        totalProtein: { $sum: "$protein" },
      },
    },
  ]);

  res.send(data);
};