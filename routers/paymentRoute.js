const router = require("express").Router();
const {
  payOrder,
  createOrder,
  getKey,
  getAllPayments,
} = require("../controllers/paymentController");
const authenticate = require("../middlewares/authenticate");

router.post("/createorder", authenticate, createOrder);
router.post("/payorder", authenticate, payOrder);
router.get("/get", authenticate, getKey);
router.get("/allpayment", authenticate, getAllPayments);

module.exports = router;
