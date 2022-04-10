const router = require("express").Router();
const {
  addReview,
  getReview,
  getVendorReview,
  getAllReviews,
} = require("../controllers/reviewController");
const authenticate = require("../middlewares/authenticate");

router.get("/get/:id", getReview);
router.get("/getallreviews", getAllReviews);
router.post("/add/:id", authenticate, addReview);
router.get("/allreviews/:storeauthorid", getVendorReview);

module.exports = router;
