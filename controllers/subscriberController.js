const Subscribers = require("../Model/Subscriber");
const serverError = require("../utils/serverError");
const transporter = require("../mail/transporter");
const { subcriberMessage } = require("../mail/templates");
const subscribeValidation = require("../validations/subscriberValidation");

const subscribeController = (req, res) => {
  const { email } = req.body;
  console.log(email);
  const subObj = { email };
  const validation = subscribeValidation({ email });
  if (validation.isValid) {
    new Subscribers(subObj)
      .save()
      .then((response) => {
        res.status(200).json({
          message:
            "Thanks for subscribe! You will get updates about our latest shop and special offers.",
          response: response,
        });
        transporter(process.env.ADMIN_USER, subcriberMessage, email);
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

module.exports = {
  subscribeController,
};
