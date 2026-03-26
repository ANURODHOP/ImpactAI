exports.calculateTDEE = (weight, height, age) => {
  return 66 + 13.7 * weight + 5 * height - 6.8 * age;
};

exports.calculateBMI = (weight, height) => {
  return weight / ((height / 100) ** 2);
};