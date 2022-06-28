const express = require("express");
const router = express.Router();

const { getAllTasks, getSingleTask, createTask, updateTask, deleteTask } = require("../controllers/products.controller")

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router