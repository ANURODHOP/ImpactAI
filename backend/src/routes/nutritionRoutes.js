const router = require("express").Router();
const c = require("../controllers/nutritionController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, c.addLog);
router.get("/", auth, c.getLogs);

module.exports = router;