const router = require("express").Router();
const {
  adminRegister,
  register,
  login,
  getUser,
  getMyAccount,
  deleteUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.post("/adminregister", adminRegister);
router.post("/register", register);
router.post("/login", login);
router.get("/get", authenticate, getUser);
router.get("/getmyaccount", authenticate, getMyAccount);
router.delete("/delete/:email", authenticate, deleteUser);

module.exports = router;
