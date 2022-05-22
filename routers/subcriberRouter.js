const router = require("express").Router();
const { subscribeController } = require("../controllers/subscriberController");

router.post("/send", subscribeController);

module.exports = router;
