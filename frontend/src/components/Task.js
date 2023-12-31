import { FaTimes } from 'react-icons/fa'
const Task = ({ task ,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() =>
    {
      console.log(task.reminder)
      onToggle(task._id)
      }
    }>
    <h3> {task.text}<FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task._id)} /></h3>
      <p>{ task.date}</p>
    </div>
  )
}

export default Task