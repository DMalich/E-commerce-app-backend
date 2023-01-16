const express = require("express");
const pizzaModel = require("../models/pizzaModel");

const router = express.Router();

router.get("/getpizzas", async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

module.exports = router;
