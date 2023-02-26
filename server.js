const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const pizzaModel = require("./models/pizzaModel.js");
const pizzasRoute = require("./routes/pizzaRoute.js");
const userModel = require("./models/userModel.js");
const userRoute = require("./routes/userRoute.js");
const orderRoute = require("./routes/orderRoute.js");


const MONGODB_URI =
    `mongodb+srv://mongo:${process.env.MONGO_PASSWORD}@cluster0.swvnicn.mongodb.net/e-commerce-pizza`;
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log("Error:");
        console.log(err.message);
    });

const app = express();

app.use(express.json());

app.use('/api/pizzas/', pizzasRoute); 
app.use('/api/users/', userRoute);
app.use('/api/orders/', orderRoute);

app.get("/", (req, res) => {
    res.send("server is running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
