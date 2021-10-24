const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  adminRegisterValidation,
  registerValidation,
  loginValidation,
} = require("../middlewares/userValidation");

const adminRegister = (_req, res) => {
  const firstName = process.env.firstName;
  const lastName = process.env.lastName;
  const email = process.env.adminEmail;
  const phone = process.env.adminPhone;
  const password = process.env.adminPassword;
  const storeName = process.env.storeName;
  const validation = adminRegisterValidation({
    firstName,
    lastName,
    email,
    phone,
    password,
    storeName
  });
  const username = email.substring(0, email.lastIndexOf("@"));
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (!response) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const user = {
                firstName,
                lastName,
                email,
                username,
                phone,
                storeName,
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
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    storeName,
    role,
    recaptch,
    agree,
  } = req.body;
  const validation = registerValidation({
    firstName,
    lastName,
    email,
    phone,
    password,
    storeName,
    recaptch,
    agree,
    role,
  });
  const username = email.substring(0, email.lastIndexOf("@"));
  if (process.env.adminEmail === email) {
    res.status(400).json({
      message: "You can't use admin mail",
    });
  } else {
    if (validation.isValid) {
      User.findOne({ email })
        .then((response) => {
          if (!response) {
            bcrypt.hash(password, 10, function (err, hash) {
              if (err) {
                serverError(res);
              } else {
                const vendor = {
                  firstName,
                  lastName,
                  email,
                  username,
                  phone,
                  password: hash,
                  storeName,
                  role,
                };
                const curstomer = {
                  email,
                  username,
                  password: hash,
                  role,
                };
                const user = role === "vendor" ? vendor : curstomer;
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
                  _id: response._id,
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
    .select("-password")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const getMyAccount = (req, res) => {
  const { email } = req.user;
  User.findOne({ email: email })
    .select("-password")
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
  getMyAccount,
  deleteUser,
};
