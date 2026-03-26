const router = require("express").Router();
const c = require("../controllers/reportController");
const auth = require("../middleware/authMiddleware");

router.get("/weekly", auth, c.getWeekly);

module.exports = router;