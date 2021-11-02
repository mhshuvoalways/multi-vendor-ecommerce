const router = require("express").Router();
const {
  addCart,
  getCartItem,
  increment,
  decrement,
  clearCart,
  deleteCartItem,
  updateCartItem,
} = require("../controllers/inCartController");
const authenticate = require("../middlewares/authenticate");

router.post("/add/:id", authenticate, addCart);
router.get("/get", authenticate, getCartItem);
router.put("/increment/:id", authenticate, increment);
router.put("/decrement/:id", authenticate, decrement);
router.delete("/deleteall", authenticate, clearCart);
router.delete("/delete/:id", authenticate, deleteCartItem);
router.put("/edit/:id", authenticate, updateCartItem);

module.exports = router;
