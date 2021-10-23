const router = require("express").Router();
const {
  createCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, createCategory);
router.get("/get", authenticate, getCategory);
router.delete("/delete/:id", authenticate, deleteCategory);

module.exports = router;
