const notFound = (req, res) => res.status(404).json({ status: false, message: "No route found" })

module.exports = notFound