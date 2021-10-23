const router = require("express").Router();
const {
  createTags,
  getTags,
  deleteTags,
} = require("../controllers/tagsController");
const authenticate = require("../middlewares/authenticate");

router.post("/create", authenticate, createTags);
router.get("/get", authenticate, getTags);
router.delete("/delete/:id", authenticate, deleteTags);

module.exports = router;
