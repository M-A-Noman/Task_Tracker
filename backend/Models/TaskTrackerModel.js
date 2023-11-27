const mongoose = require('mongoose')
const TaskTrackerSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    reminder: {
        type: Boolean,
        require: true
    }
})
module.exports = mongoose.model("TaskTracker", TaskTrackerSchema)