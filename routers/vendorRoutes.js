const router = require("express").Router();
const {
  updateVendor,
  getVendor,
  getMyVendor,
  getAllVendor,
  vendorFollow,
} = require("../controllers/vendorController");
const authenticate = require("../middlewares/authenticate");
const fileUploader = require("../middlewares/fileUploader");

router.post("/add", authenticate, fileUploader.single("image"), updateVendor);
router.get("/get", authenticate, getVendor);
router.get("/get/:authorId", getVendor);
router.get("/myvendor", authenticate, getMyVendor);
router.get("/allvendor", getAllVendor);
router.get("/follow/:vendorId", authenticate, vendorFollow);

module.exports = router;
