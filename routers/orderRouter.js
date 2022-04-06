const router = require("express").Router();
const {
  orderPlace,
  getOderDetails,
  checkValidationOrder,
} = require("../controllers/orderController");
const authenticate = require("../middlewares/authenticate");

router.post("/validationcheck", authenticate, checkValidationOrder);
router.get("/get", authenticate, getOderDetails);
router.post("/place", authenticate, orderPlace);

module.exports = router;
