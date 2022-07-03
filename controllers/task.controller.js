const TaskSchema = require("../models/task")
const asyncWrapper = require("../middlewares/async")
const { createCustomeError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const taskList = await TaskSchema.find()
    res.status(200).json({ status: true, message: "Tasks Fetched Successfully", data: taskList })
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    const { id } = req.params;

    const task = await TaskSchema.findOne({ _id: id })
    if (!task) {
        return next(createCustomeError(`No Task Found with this ID: ${id}!`, 404))
    }
    res.status(200).json({ status: true, message: "Task Fetched Successfully", data: task })
})

const createTask = asyncWrapper(async (req, res) => {
    let task = await new TaskSchema(req.body).save()
    res.status(200).json({ status: true, message: "Task Created Successfully", data: task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;

    const task = await TaskSchema.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true
    })

    if (!task) {
        return next(createCustomeError(`No Task Found with this ID: ${id}!`, 404))
    }
    res.status(200).json({ status: true, message: "Task Updated Successfully", data: task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id } = req.params;

    const task = await TaskSchema.findOneAndDelete({ _id: id })
    if (!task) {
        return next(createCustomeError(`No Task Found with this ID: ${id}!`, 404))
    }
    res.status(200).json({ status: true, message: "Task Deleted Successfully", data: task })
})

module.exports = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask,
    deleteTask
}