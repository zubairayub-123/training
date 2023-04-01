import React from 'react'
import { useState } from 'react';

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert("Please add a task")
            return
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
        <label>Task Name</label>
        <input type="text" placeholder='Enter the Task'
        value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
        <label>Day</label>
        <input type="text" placeholder='Enter the Date and Time'
        value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type="checkbox" checked={reminder}
        value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Data" className='btn btn-block'/>
    </form>
  )
}

export default AddTask