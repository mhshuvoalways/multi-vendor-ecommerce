const router = require("express").Router();
const { contactController } = require("../controllers/contactController");

router.post("/send", contactController);

module.exports = router;
