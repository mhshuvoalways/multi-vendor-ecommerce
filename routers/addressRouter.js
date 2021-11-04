const router = require("express").Router();
const {
  addAddress,
  getAddress,
  updateAddress,
} = require("../controllers/addressController");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, addAddress);
router.post("/get", authenticate, getAddress);
router.put("/edit", authenticate, updateAddress);

module.exports = router;
