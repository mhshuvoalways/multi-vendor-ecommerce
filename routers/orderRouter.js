const router = require("express").Router();
const {
  orderPlace,
  getOderDetails,
  checkValidationOrder,
  getVenodrDetails
} = require("../controllers/orderController");
const authenticate = require("../middlewares/authenticate");

router.post("/validationcheck", authenticate, checkValidationOrder);
router.get("/get", authenticate, getOderDetails);
router.post("/place", authenticate, orderPlace);
router.get("/getvendororder/:id", getVenodrDetails);

module.exports = router;
