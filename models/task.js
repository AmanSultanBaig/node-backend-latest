const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Task name is required"],
        trim: true,
        maxLength: [20, "name can not be more than 20 characters"]
    },
    is_completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)