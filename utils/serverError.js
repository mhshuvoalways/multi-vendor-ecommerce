module.exports = serverError = (res) => {
  res.status(500).json({
    message: "Server error occurred",
  });
};
