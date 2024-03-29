const router = require("express").Router();
const fileUploader = require("../middlewares/fileUploader");
const {
  addProduct,
  getProduct,
  filterProduct,
  getMyproducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, fileUploader.single("image"), addProduct);
router.get("/get", getProduct);
router.post("/filterproducts", filterProduct);
router.get("/getmyproducts", authenticate, getMyproducts);
router.put(
  "/edit/:id",
  authenticate,
  fileUploader.single("image"),
  updateProduct
);
router.delete("/delete/:id", authenticate, deleteProduct);

module.exports = router;
