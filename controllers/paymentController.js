const Razorpay = require("razorpay");
const Payment = require("../Model/Payment");
const InCart = require("../Model/InCart");
const serverError = require("../utils/serverError");

const createOrder = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (!order) return serverError(res);
    res.send(order);
  } catch {
    serverError(res);
  }
};

const payOrder = (req, res) => {
  const { amount, orderId, paymentId, signature, payerID, method, discount } =
    req.body;
  InCart.find({ authorId: req.user._id })
    .then((cartResponse) => {
      if (cartResponse.length) {
        let subTotal = 0;
        cartResponse.map((product) => {
          subTotal += product.subTotal;
        });
        const finalAmount = discount
          ? subTotal - (subTotal * discount) / 100
          : subTotal;
        if (Math.round(finalAmount) === amount) {
          const obj = {
            author: req.user._id,
            amount,
            details: {
              orderId,
              paymentId,
              signature,
              payerID,
            },
            method,
          };
          new Payment(obj)
            .save()
            .then(() => {
              res.status(200).json({
                message: "Thanks for payment!",
              });
            })
            .catch(() => {
              serverError(res);
            });
        } else {
          res.status(400).json({
            message: "Something is wrong!",
          });
        }
      }
    })
    .catch(() => {
      serverError(res);
    });
};

const getKey = (req, res) => {
  res.status(200).json(process.env.RAZORPAY_KEY_ID);
};

const getAllPayments = (req, res) => {
  Payment.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  createOrder,
  payOrder,
  getKey,
  getAllPayments,
};
