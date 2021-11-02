const router = require("express").Router();
const {
  addWishList,
  deleteWishListItem,
  getWishItem,
  clearWishList,
} = require("../controllers/inWishController");
const authenticate = require("../middlewares/authenticate");

router.post("/add/:id", authenticate, addWishList);
router.get("/get", authenticate, getWishItem);
router.delete("/delete/:id", authenticate, deleteWishListItem);
router.delete("/deleteall", authenticate, clearWishList);

module.exports = router;
