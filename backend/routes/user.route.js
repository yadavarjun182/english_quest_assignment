const express = require("express")
const { userModel } = require("../model/user.model")

const jwt = require('jsonwebtoken');


const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    try {
        const data = await userModel.find()
        res.status(200).send(data)
    } catch (err) {
        res.send({ "err": err.message })
    }
})

userRouter.post("/register", async (req, res) => {
    const data = req.body
    try {
        const user = new userModel(data)
        await user.save()
        res.send("user registered successfully")
    } catch (err) {
        res.send({ "err": err.message })
    }

})

userRouter.post("/login", async (req, res) => {
    try {
        const token = jwt.sign({ name: 'arjun' }, 'masai');
        const { email, password } = req.body
        const user = await userModel.find({ email, password })
        if (user.length > 0) {
            res.status(200).send(`login successful ${token}`)
        }
        else {
            res.send("something went wrong")
        }
    } catch (err) {
        res.send("error occured", { "err": err.message })
    }
})

userRouter.patch("/update", (req, res) => {
    res.send("user updated successfully")
})

userRouter.delete("/delete", (req, res) => {
    res.send("user removed successfully")
})

module.exports = { userRouter }