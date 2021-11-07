const router = require("express").Router();
const { addReview, getReview } = require("../controllers/reviewController");
const authenticate = require("../middlewares/authenticate");

router.get("/get/:id", getReview);
router.post("/add/:id", authenticate, addReview);

module.exports = router;
