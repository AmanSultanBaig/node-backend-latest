const express = require("express");
const app = express();
const connectDB = require("./db/connect")
require("dotenv").config()

const taskRoutes = require("./routes/task")

const notFound = require("./middlewares/not-found")
const errorHandler = require("./middlewares/error-handler")


// middlewares
app.use(express.json())

app.use("/api/v1/task", taskRoutes)

app.use(notFound)
app.use(errorHandler)

const port = 3000 || process.env.PORT

const startApplication = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, __ => console.log("App is Running Successfully!"))
    } catch (error) {
        console.log(error)
    }
}

startApplication()