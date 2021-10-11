const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  registerValidation,
  loginValidation,
} = require("../middlewares/userValidation");

const adminRegister = (req, res) => {
  const name = process.env.adminName;
  const email = process.env.adminEmail;
  const phone = process.env.adminPhone;
  const password = process.env.adminPassword;
  const validation = registerValidation({ name, email, phone, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (!response) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const user = {
                name,
                email,
                phone,
                password: hash,
                role: "admin",
              };
              new User(user)
                .save()
                .then((response) => {
                  res.status(200).json({
                    message: "Register successful",
                    response,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          res.status(400).json({
            message: "User already exists",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const register = (req, res) => {
  const { name, email, phone, password, role } = req.body;
  const validation = registerValidation({ name, email, phone, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (!response) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const user = { name, email, phone, password: hash, role };
              new User(user)
                .save()
                .then((response) => {
                  res.status(200).json({
                    message: "Register successful",
                    response,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          res.status(400).json({
            message: "User already exists",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const login = (req, res) => {
  const { email, password } = req.body;
  const validation = loginValidation({ email, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          bcrypt.compare(password, response.password, function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  email: response.email,
                },
                process.env.SECRET,
                { expiresIn: "1h" }
              );
              res.status(200).json({
                message: "Login successful",
                token,
              });
            } else {
              res.status(400).json({
                message: "Password doesn't match",
              });
            }
            if (err) {
              serverError(res);
            }
          });
        } else {
          res.status(400).json({
            message: "User not found",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const getUser = (req, res) => {
  User.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json({
        message: "Delete successful",
        response,
      });
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  adminRegister,
  register,
  login,
  getUser,
  deleteUser,
};
