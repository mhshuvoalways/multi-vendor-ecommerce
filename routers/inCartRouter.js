const router = require("express").Router();
const {
  addCart,
  getCartItem,
  increment,
  decrement,
  deleteCartItem,
} = require("../controllers/inCartController");
const authenticate = require("../middlewares/authenticate");

router.post("/add/:id", authenticate, addCart);
router.get("/get", authenticate, getCartItem);
router.put("/increment/:id", authenticate, increment);
router.put("/decrement/:id", authenticate, decrement);
router.delete("/delete/:id", authenticate, deleteCartItem);

module.exports = router;
