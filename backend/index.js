const express = require("express")
const cors = require('cors');
// const { port } = require("./port")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.route")
const { dataRouter } = require("./routes/form.route")

const PORT = 7356;

const app = express()
app.use(express.json())
app.use(cors());

app.use("/user", userRouter)
app.use("/books", dataRouter)

app.get("/", (req, res) => {
    res.send("welcome to homepage")
})

app.listen(PORT, async () => {
    try {
        await connection
        console.log("****************************connected to DB********************************")
    } catch (err) {
        console.log({ "err": err.message })
    }
    console.log(`server is running at ${PORT}`)
})