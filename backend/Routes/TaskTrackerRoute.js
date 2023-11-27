const { Router } = require('express');
const { getTasks, saveTasks, updateTasks, deleteTasks, getSingleTask } = require('../controllers/TaskTrackerController');

const router = Router();

router.get('/', getTasks)
router.get('/:id', getSingleTask)
router.post('/save', saveTasks)
router.patch('/update', updateTasks)
router.delete('/delete/:id', deleteTasks)

module.exports = router;