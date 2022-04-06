const router = require("express").Router();
const {
  createCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authenticate = require("../middlewares/authenticate");
const fileUploader = require("../middlewares/fileUploader");

router.post(
  "/create",
  authenticate,
  fileUploader.single("icon"),
  createCategory
);
router.get("/get", getCategory);
router.delete("/delete/:id", authenticate, deleteCategory);

module.exports = router;
