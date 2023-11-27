import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState ,useEffect} from 'react'
import  AddTask from './components/AddTask'
const App = () => {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTask()
  }, [])
  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/save')
    const data = await res.json()
    return data
  }
  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/save/${id}`)
    const data = await res.json()
    return data
  }
  //add task
  const addTask = async (task) => {
    // window.alert('task added')
    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
    // setShowAddTask(!showAddTask)

    const res = await fetch('http://localhost:5000/save', {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
      },
      body:JSON.stringify(task),
    })
    const data =await res.json()
    setTasks([...tasks, data])
    setShowAddTask(!showAddTask)
    
    
  }

  //delete task
  const onDelete = async (id) => {
    if (window.confirm(['Do you really want to delete the item?']) === true) {
      await fetch(`http://localhost:5000/delete`, {
        method:'DELETE'
      })
      setTasks(tasks.filter((task) => task.id !== id))
    } 
  }
  //toggle reminder
  const toggleReminder = async(id) => {
    // if (window.confirm(['It will a confirmation of task completion. Click OK if you complete it'])) {
      // setTasks(tasks.filter((task) => task.id !== id))
    //  window.alert('Task complete')
    // }
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/update`, {
      method: 'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    })
    const data = await res.json()
    // console.log(data)
    


    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task,reminder: !data.reminder}
          : task
      )
    )
  }
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ?
        (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />
        )
        : (
        'No task to show'
      ) 
    }
    </div>
  );
}

export default App;
