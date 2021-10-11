const router = require("express").Router();
const fileUploader = require("../middlewares/fileUploader");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, fileUploader.single("image"), addProduct);
router.get("/get", getProduct);
router.put("/edit/:id", authenticate, updateProduct);
router.delete("/delete/:id", authenticate, deleteProduct);

module.exports = router;
