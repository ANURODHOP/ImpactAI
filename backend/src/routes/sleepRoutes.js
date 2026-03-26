const router = require("express").Router();
const c = require("../controllers/waterController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, c.addWater);
router.get("/", auth, c.getProgress);

module.exports = router;