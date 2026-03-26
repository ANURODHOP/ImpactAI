const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/nutrition", require("./routes/nutritionRoutes"));
app.use("/water", require("./routes/waterRoutes"));
app.use("/sleep", require("./routes/sleepRoutes"));
app.use("/report", require("./routes/reportRoutes"));
app.use("/health", require("./routes/healthRoutes"));

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

module.exports = app;