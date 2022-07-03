const { CustomAPIError } = require("../errors/custom-error")

const errorHandlerMiddleware = async (error, req, res, next) => {
    if(error instanceof CustomAPIError) {
        return res.status(error.statusCode).json({ message: error.message })
    }
    return res.status(500).json({ message: "Server Error" })
}

module.exports = errorHandlerMiddleware