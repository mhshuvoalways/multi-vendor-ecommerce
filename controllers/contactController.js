const Contact = require("../Model/Contact");
const serverError = require("../utils/serverError");
const transporter = require("../mail/transporter");
const { contactMessage } = require("../mail/templates");
const contactValidation = require("../validations/contactValidation");

const contactController = (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  const contactObj = { firstName, lastName, email, message };
  const validation = contactValidation({ firstName, lastName, email, message });
  if (validation.isValid) {
    new Contact(contactObj)
      .save()
      .then((response) => {
        res.status(200).json({
          message: "Thanks for reaching out to us! We will reply as soon as possible.",
          response: response,
        });
        transporter(
          process.env.ADMIN_USER,
          contactMessage,
          { firstName, lastName, email },
          message
        );
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

module.exports = {
  contactController,
};
