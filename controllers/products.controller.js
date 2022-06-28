const getAllTasks = async (req, res) => {
    res.send("All Tasks Fetched Successfully!")
}

const getSingleTask = async (req, res) => {
    const { id } = req.params;
    res.send(`Single Task Fetched Successfully! with this id ${id}`)
}

const createTask = async (req, res) => {
    res.send(req.body)
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    res.send(`Task Updated Successfully! with this id ${id}`)
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    res.send(`Tasks Deleted Successfully! with this id ${id}`)
}

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}