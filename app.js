const express = require("express");
const app = express();
const connectDB = require("./db/connect")
require("dotenv").config()

const taskRoutes = require("./routes/products")

app.use(express.json())

app.use("/api/v1/task", taskRoutes)

const port = 3000 || process.env.PORT

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, __ => console.log("App is Running Successfully!"))
    } catch (error) {
        console.log(error)
    }
}

start()