const router = require("express").Router();
const {
  addAddress,
  getAddress,
} = require("../controllers/userAddressController");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, addAddress);
router.get("/get", authenticate, getAddress);

module.exports = router;
