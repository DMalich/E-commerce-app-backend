const express = require("express");
const orderModel = require("../models/orderModel");

const router = express.Router();

router.post("/placeorders", async (req, res) => {
    const { totalPrice, currentUser, cartItems, shippingAddress } = req.body;

    try {
        const newOrder = new orderModel({
            name: currentUser.name,
            email: currentUser.email,
            userid: currentUser._id,
            orderItems: cartItems,
            shippingAddress: shippingAddress,
            orderAmount: totalPrice,
        });

        newOrder.save();
        res.send("Order Placed Successully!");
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body;

    try {
        const orders = await orderModel.find({ userid: userid });
        res.send(orders);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

module.exports = router;
