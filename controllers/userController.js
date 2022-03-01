const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");
const serverError = require("../utils/serverError");
const {
  adminRegisterValidation,
  registerValidation,
  loginValidation,
  findMailValidation,
  recoverPassValidation,
  updatePassValidation,
} = require("../middlewares/userValidation");
const transporter = require("../mail/transporter");
const { recoverPass } = require("../mail/templates");

const adminRegister = (_req, res) => {
  const email = process.env.adminEmail;
  const password = process.env.adminPassword;
  const storeName = process.env.storeName;
  const validation = adminRegisterValidation({
    email,
    password,
    storeName,
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
                email,
                username,
                storeName,
                password: hash,
                role: "admin",
              };
              new User(user)
                .save()
                .then((response) => {
                  res.status(200).json({
                    message: "Thanks for register!",
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
            message: "User already exists!",
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
  const { email, password, storeName, role, recaptch, agree } = req.body;
  const validation = registerValidation({
    email,
    password,
    storeName,
    recaptch,
    agree,
    role,
  });
  const username = email.substring(0, email.lastIndexOf("@"));
  if (process.env.adminEmail === email) {
    res.status(400).json({
      message: "You can't use admin mail!",
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
                  email,
                  username,
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
                      message: "Thanks for register!",
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
              message: "User already exists!",
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
                  username: response.username,
                },
                process.env.SECRET,
                { expiresIn: "1h" }
              );
              res.status(200).json({
                message: "Welcome back!",
                token,
              });
            } else {
              res.status(400).json({
                message: "Password doesn't match!",
              });
            }
            if (err) {
              serverError(res);
            }
          });
        } else {
          res.status(400).json({
            message: "User not found!",
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

const findMail = (req, res) => {
  const { email } = req.body;
  const validation = findMailValidation(email);
  if (validation.isValid) {
    User.findOne({ email })
      .select("-password")
      .then((response) => {
        const token = jwt.sign(
          {
            _id: response._id,
            email: response.email,
          },
          process.env.SECRET,
          { expiresIn: "1h" }
        );

        if (response) {
          transporter(
            email,
            recoverPass,
            response.firstName + " " + response.lastName || response.username,
            token
          );
          res.status(200).json(response);
        } else {
          res.status(400).json("User not found!");
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const recoverPassword = (req, res) => {
  const { token, password } = req.body;
  const validation = recoverPassValidation(password);
  if (validation.isValid) {
    jwt.verify(token, process.env.SECRET, function (err, decode) {
      if (decode) {
        User.findOne({ _id: decode._id })
          .then((response) => {
            if (response) {
              bcrypt.hash(password, 7, function (err, hash) {
                if (hash) {
                  const updateWithPass = {
                    password: hash,
                  };
                  User.findOneAndUpdate({ _id: decode._id }, updateWithPass, {
                    new: true,
                  })
                    .select("-password")
                    .then((response) => {
                      res.status(200).json(response);
                    })
                    .catch(() => {
                      serverError(res);
                    });
                } else if (err) {
                  serverError(res);
                }
              });
            }
          })
          .catch(() => {
            serverError(res);
          });
      } else if (err) {
        serverError(res);
      }
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

const avatarAdd = (req, res) => {
  User.findOne({ _id: req.user._id })
    .then((response) => {
      if (response.avatar.public_id) {
        if (req.file.filename) {
          cloudinary.v2.uploader.destroy(
            response.avatar.public_id,
            function (err, _result) {
              if (err) {
                serverError(res);
              } else {
                cloudinary.v2.uploader.upload(
                  req.file.path,
                  {
                    public_id: "ecommerce-app/user/avatar/" + req.file.filename,
                  },
                  function (picErr, picResult) {
                    if (picErr) {
                      serverError(res);
                    } else {
                      const avatar = {
                        public_id: picResult.public_id,
                        url: picResult.url,
                      };
                      User.findOneAndUpdate(
                        { _id: req.user._id },
                        { avatar },
                        { new: true }
                      )
                        .select("-password")
                        .then((responseOne) => {
                          res.status(200).json(responseOne);
                        })
                        .catch(() => {
                          serverError(res);
                        });
                    }
                  }
                );
              }
            }
          );
        }
      } else {
        cloudinary.v2.uploader.upload(
          req.file.path,
          { public_id: "ecommerce-app/user/avatar/" + req.file.filename },
          function (picErr, picResult) {
            if (picErr) {
              serverError(res);
            } else {
              const avatar = {
                public_id: picResult.public_id,
                url: picResult.url,
              };
              User.findOneAndUpdate(
                { _id: req.user._id },
                { avatar },
                { new: true }
              )
                .select("-password")
                .then((responseOne) => {
                  res.status(200).json(responseOne);
                })
                .catch(() => {
                  serverError(res);
                });
            }
          }
        );
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const updateUser = (req, res) => {
  const { firstName, lastName, phone, currentPassword, newPassword } = req.body;
  const validation = updatePassValidation({ currentPassword, newPassword });
  if (validation.isValid) {
    User.findOne({ _id: req.user._id })
      .then((responseOne) => {
        bcrypt.compare(
          currentPassword,
          responseOne.password,
          function (error, result) {
            if (result) {
              bcrypt.hash(newPassword, 10, function (err, hash) {
                if (hash) {
                  const updateWithPass = {
                    firstName,
                    lastName,
                    phone,
                    password: hash,
                  };
                  User.findOneAndUpdate({ _id: req.user._id }, updateWithPass, {
                    new: true,
                  })
                    .select("-password")
                    .then((response) => {
                      res.status(200).json(response);
                    })
                    .catch(() => {
                      serverError(res);
                    });
                }
                if (err) {
                  serverError(res);
                }
              });
            } else {
              res.status(400).json({
                message: "Your current password is not currect",
              });
            }
            if (error) {
              serverError(res);
            }
          }
        );
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findOneAndRemove({ _id: id })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  adminRegister,
  register,
  login,
  findMail,
  recoverPassword,
  getUser,
  getMyAccount,
  updateUser,
  avatarAdd,
  deleteUser,
};
