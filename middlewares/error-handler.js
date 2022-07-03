const errorHandlerMiddleware = async (error, req, res, next) => {
    console.log(error)
    return res.status(500).json({message: error.message})
}

module.exports = errorHandlerMiddleware