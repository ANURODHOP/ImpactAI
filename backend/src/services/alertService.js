exports.checkAlerts = (data) => {
  const alerts = [];

  if (data.protein < 50) alerts.push("Low protein today");
  if (data.calories > 2500) alerts.push("Over calorie limit");

  return alerts;
};