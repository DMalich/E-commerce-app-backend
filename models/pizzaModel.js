const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema(
    {
        name: { type: String, require },
        sizes: [],
        prices: [],
        category: { type: String, require },
        image: { type: String, require },
        desc: { type: String, require },
    },
    {
        timestamps: true,
    }
);

const pizzaModel = mongoose.model("pizzas", pizzaSchema);

module.exports = pizzaModel;
