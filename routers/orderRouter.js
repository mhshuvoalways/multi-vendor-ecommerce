const router = require("express").Router();
const { orderPlace } = require("../controllers/orderController");
const authenticate = require("../middlewares/authenticate");

router.post("/place", authenticate, orderPlace);

module.exports = router;
