const router = require("express").Router();
const {
  adminRegister,
  register,
  login,
  activeAccountController,
  findMail,
  recoverPassword,
  getUser,
  updateUser,
  avatarAdd,
  getMyAccount,
  deleteUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");
const fileUploader = require("../middlewares/fileUploader");

router.post("/adminregister", adminRegister);
router.post("/register", register);
router.post("/login", login);
router.post("/active", activeAccountController);
router.post("/findmail", findMail);
router.post("/recoverpass", recoverPassword);
router.get("/get", authenticate, getUser);
router.get("/getmyaccount", authenticate, getMyAccount);
router.put("/avatar", authenticate, fileUploader.single("avatar"), avatarAdd);
router.put("/edit", authenticate, updateUser);
router.delete("/delete/:email", authenticate, deleteUser);

module.exports = router;
