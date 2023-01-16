const express = require("express");
const userModel = require("../models/userModel");

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new userModel({ name, email, password });

    try {
        newUser.save();
        res.send("User Registered Successully!");
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.find({ email, password });

        if (user.length > 0) {
            //res.send('User Logged in Successully!')
            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                isAdmin: user[0].isAdmin,
                _id: user[0]._id,
            };
            res.send(currentUser);
        } else {
            return res.status(400).json({ message: "User sign in failed!" });
        }
    } catch (err) {
        return res.status(400).json({ message: err });
    }
});

module.exports = router;
