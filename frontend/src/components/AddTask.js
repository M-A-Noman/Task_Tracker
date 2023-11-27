import { useState } from "react"
const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = ((e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add text')
            return
        }
        // var a=-1;
        // var temDate = (day) => {
            
        //     for (var i = 0; i < day.length; i++){
        //         if (day[i] == 'T') {
        //             a = i; break;
        //         }
        //         temDate+=day[i]
        //     }
        // }
        // var temTime = (day) => {
        //     for (var i = a + 1; i < day.length; i++){
        //         temTime += day[i];
        //     }
        // }
        // day=setDay(...temDate,' at ',temTime)

        onAdd({ text, day, reminder })
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
