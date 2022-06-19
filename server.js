const express = require("express");
const app = express();
require("dotenv").config()

app.use(express.json())

const port = 3000 || process.env.PORT
app.listen(port, __ => console.log("App is Running Successfully!"))