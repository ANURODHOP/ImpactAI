const cron = require("node-cron");
const admin = require("../config/firebase");

cron.schedule("0 8 * * *", () => {
  admin.messaging().send({
    notification: { title: "Drink Water 💧" },
    topic: "all",
  });
});