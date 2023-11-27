const { Router } = require('express');
const { getTasks, saveTasks, updateTasks, deleteTasks } = require('../controllers/TaskTrackerController');

const router = Router();
router.get('/', getTasks)
router.post('/save', saveTasks)
router.patch('/update', updateTasks)
router.delete('/delete', deleteTasks)

module.exports = router;