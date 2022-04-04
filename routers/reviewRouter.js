const router = require("express").Router();
const {
  addReview,
  getReview,
  getAllReview,
} = require("../controllers/reviewController");
const authenticate = require("../middlewares/authenticate");

router.get("/get/:id", getReview);
router.post("/add/:id", authenticate, addReview);
router.get("/allreviews", getAllReview);

module.exports = router;
