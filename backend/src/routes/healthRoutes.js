const router = require("express").Router();
const c = require("../controllers/healthController");

router.post("/", c.getHealth);

module.exports = router;