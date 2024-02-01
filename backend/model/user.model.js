
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    // name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // age: { type: Number, required: true },
     role: {
        type: String,
        required: true,
        enum: ["CREATOR", "VIEW_ALL"]
    }
})

const userModel = mongoose.model("user", userSchema)

module.exports = { userModel }