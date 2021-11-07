const router = require("express").Router();
const { orderPlace, getOderDetails } = require("../controllers/orderController");
const authenticate = require("../middlewares/authenticate");

router.get("/get", authenticate, getOderDetails);
router.post("/place", authenticate, orderPlace);

module.exports = router;
