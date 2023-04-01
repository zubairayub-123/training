import { FaTimes } from 'react-icons/fa'
import { FaSmile } from 'react-icons/fa'
import { FaCalendarTimes } from 'react-icons/fa'


const Task = ({ task, onDelete, onReminder }) => {
    return (
      <div className={`event ${task.reminder ?'reminder': ''}`} onDoubleClick={() => 
          onReminder(task.id)}>  
            <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}}
            onClick={() => onDelete(task.id)} /></h3>
            <i>{task.day} <FaCalendarTimes/></i>
        </div>
    )
}

export default Task