const router = require("express").Router();
const {
  adminRegister,
  register,
  login,
  getUser,
  deleteUser,
} = require("../controllers/userController");

router.post("/adminregister", adminRegister);
router.post("/register", register);
router.post("/login", login);
router.get("/get", getUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
