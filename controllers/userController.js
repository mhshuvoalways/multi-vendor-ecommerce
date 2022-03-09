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
} = require("../validations/userValidation");
const transporter = require("../mail/transporter");
const { recoverPass, activeAccount } = require("../mail/templates");
const axios = require("axios");

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
                isActive: true,
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
                const token = jwt.sign(
                  {
                    email: email,
                    username: username,
                  },
                  process.env.SECRET,
                  { expiresIn: "1h" }
                );
                transporter(email, activeAccount, username, token);

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
          if (response.isActive) {
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
              message: "Please active your account and try again",
            });
          }
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

const loginWithGoogle = (req, res) => {
  const { accessToken, email, givenName, familyName, imageUrl } = req.body;
  axios
    .get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`
    )
    .then((response) => {
      if (response.data.aud === process.env.GOOGLE_CLIENT_ID) {
        if (response.data.email_verified) {
          const username = email.substring(0, email.lastIndexOf("@"));
          User.findOne({ email })
            .then((response) => {
              const customer = {
                email: email,
                username: username,
                firstName: givenName,
                lastName: familyName,
                avatar: {
                  url: imageUrl,
                },
                strategy: "google",
              };
              if (response) {
                if (response.strategy === "google") {
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
                    message: "Welcome to our application!",
                    token,
                  });
                } else {
                  res.status(400).json({
                    message: `You have already an account with ${response.strategy}`,
                  });
                }
              } else {
                new User(customer)
                  .save()
                  .then((response) => {
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
                      message: "Welcome to our application!",
                      token,
                    });
                  })
                  .catch(() => {
                    serverError(res);
                  });
              }
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "Please verify your email address!",
          });
        }
      } else {
        res.status(400).json({
          message: "You are a hacker!",
        });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const loginWithFacebook = (req, res) => {
  const { accessToken, email, name, imageUrl, userID, appId } = req.body;
  axios
    .get(
      `https://graph.facebook.com/v2.11/${userID}?fields=id,name,email,picture&access_token=${accessToken}`
    )
    .then(() => {
      if (appId === process.env.FACEBOOK_appId) {
        const username = email.substring(0, email.lastIndexOf("@"));
        User.findOne({ email })
          .then((response) => {
            const customer = {
              email: email,
              username: username,
              firstName: name.split(" ")[0],
              lastName: name.split(" ")[1],
              avatar: {
                url: imageUrl,
              },
              strategy: "facebook",
            };
            if (response) {
              if (response.strategy === "facebook") {
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
                  message: "Welcome to our application!",
                  token,
                });
              } else {
                res.status(400).json({
                  message: `You have already an account with ${response.strategy}`,
                });
              }
            } else {
              new User(customer)
                .save()
                .then((response) => {
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
                    message: "Welcome to our application!",
                    token,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          })
          .catch(() => {
            serverError(res);
          });
      } else {
        res.status(400).json({
          message: "You are a hacker!",
        });
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const activeAccountController = (req, res) => {
  const { token } = req.body;
  try {
    const decode = jwt.verify(token, process.env.SECRET);
    User.findOneAndUpdate(
      { email: decode.email },
      {
        isActive: true,
      },
      { new: true }
    )
      .then(() => {
        res.status(200).json("Thanks for Activating your account!");
      })
      .catch(() => {
        serverError(res);
      });
  } catch {
    res.status(400).json({
      message: "Something is wrong!",
    });
  }
};

const findMail = (req, res) => {
  const { email } = req.body;
  const validation = findMailValidation(email);
  if (validation.isValid) {
    User.find()
      .select("-password")
      .then((response) => {
        const findUser = response.find((el) => el.email === email);
        const token = jwt.sign(
          {
            _id: findUser._id,
            email: findUser.email,
            username: findUser.username,
          },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        if (findUser) {
          if (findUser.strategy === "email") {
            transporter(
              email,
              recoverPass,
              findUser.firstName + " " + findUser.lastName || findUser.username,
              token
            );
            res.status(200).json(findUser);
          } else {
            res.status(400).json({
              message: `No need to change your password because you logged in with ${findUser.strategy}`,
            });
          }
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

const recoverPassword = (req, res) => {
  const { token, password } = req.body;
  const validation = recoverPassValidation(password);
  if (validation.isValid) {
    jwt.verify(token, process.env.SECRET, function (err, decode) {
      if (decode) {
        User.findOne({ _id: decode._id })
          .then((response) => {
            if (response && response.strategy === "email") {
              bcrypt.hash(password, 10, function (err, hash) {
                if (hash) {
                  const updateWithPass = {
                    password: hash,
                  };
                  User.findOneAndUpdate({ _id: decode._id }, updateWithPass, {
                    new: true,
                  })
                    .select("-password")
                    .then(() => {
                      res.status(200).json(token);
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
        res.status(400).json({
          message: "Something is wrong!",
        });
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
  const { firstName, lastName, phone } = req.body;
  const update = {
    firstName,
    lastName,
    phone,
  };
  User.findOneAndUpdate({ _id: req.user._id }, update, {
    new: true,
  })
    .select("-password")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

const updateUserPass = (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const validation = updatePassValidation({ currentPassword, newPassword });
  if (validation.isValid) {
    User.findOne({ _id: req.user._id })
      .then((responseOne) => {
        if (responseOne.strategy === "email") {
          bcrypt.compare(
            currentPassword,
            responseOne.password,
            function (error, result) {
              if (result) {
                bcrypt.hash(newPassword, 10, function (err, hash) {
                  if (hash) {
                    const updatePass = {
                      password: hash,
                    };
                    User.findOneAndUpdate({ _id: req.user._id }, updatePass, {
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
        } else {
          res.status(400).json({
            message: `No need to change your password because you logged in with ${responseOne.strategy}!`,
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
  loginWithGoogle,
  loginWithFacebook,
  activeAccountController,
  findMail,
  recoverPassword,
  getUser,
  getMyAccount,
  updateUser,
  updateUserPass,
  avatarAdd,
  deleteUser,
};
