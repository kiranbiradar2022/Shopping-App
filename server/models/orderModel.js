const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    orderItems: [
      {
        name: { type: String, require },
        quantity: { type: Number, require },
        _id: { type: String, require },
        price: { type: Number, require },
      },
    ],
    shippingAddress: {
      address: { type: String, require },
      city: { type: String, require },
      postalCode: { type: Number, require },
      country: { type: String, require },
    },
    orderAmount: { type: Number, require },
    transactionId: { type: String, require },
    isDelivered: { type: Boolean, require },
  },
  {
    timestamps: true,
  }
);

const Ordermodel = mongoose.model("orders", orderSchema);

module.exports = Ordermodel;
