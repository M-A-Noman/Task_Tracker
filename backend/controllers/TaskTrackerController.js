const TaskTrackerModel = require('../Models/TaskTrackerModel')
module.exports.getTasks = async (req, res) => {
    const tasks = await TaskTrackerModel.find()
    res.send(tasks)
}

module.exports.saveTasks = async (req, res) => {
    const { text, date, reminder } = req.body
    TaskTrackerModel
        .create({ text, date, reminder })
        .then((data) => {
            console.log('Task added successfully...')
            console.log(data)
            res.send(data)
        })

}
module.exports.updateTasks = async (req, res) => {
    const { _id, text, date, reminder } = req.body
    TaskTrackerModel
        .findByIdAndUpdate(_id, { text, date, reminder })
        .then(() => res.send("Update successfully..."))
        .catch((err) => console.log(err))
}
module.exports.singleUpdate = async (req, res) => {
    const { _id, text } = req.body
    TaskTrackerModel
        .findByIdAndUpdate(_id, { text })
        .then(() => res.send("Single update success..."))
    .catch((err)=>console.log(err))
}
module.exports.deleteTasks = async (req, res) => {
    const { _id } = req.body
    TaskTrackerModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted successfully..."))
        .catch((err) => console.log(err))
}