import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder, setReminder] = useState(false)
    // console.log(day)
    // console.log(new Date(day))
    const onSubmit = ((e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add text')
            return
        }

        onAdd({ text, date: day, reminder })
        console.log(day)
        setText('')
        setDay('')
        setReminder(false)
    })
  return (
    <form className='add-form' onSubmit={onSubmit}>
          <div className="form-control">
              <label>Task</label>
              <input type='text' placeholder="Add Task" value={ text} onChange={(e) => setText(e.target.value)} />
          </div> 
          <div className="form-control">
              <label>Day & Time</label>
              <input type='datetime-local' placeholder="Add Day & Time" value={ day} onChange={(e) => setDay(e.target.value)}/>
          </div> 
          <div className="form-control form-control-check">
              <label>Set Reminder</label>
              <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} checked={ reminder} />
          </div> 
          <input type="submit" value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
