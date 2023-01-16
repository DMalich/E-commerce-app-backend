const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        name: { type: String, require },
        email: { type: String, require },
        orderItems: [],
        userid: { type: String, require },
        shippingAddress: { type: String, require },
        orderAmount: { type: Number, require },
        isDelivered: { type: Boolean, require, default: false },
        isPaid: { type: Boolean, require, default: false },
    },
    {
        timestamps: true,
    }
);

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
