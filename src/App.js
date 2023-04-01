
import React from 'react'
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import AddTask from './Components/AddTask';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Tasks from './Components/Tasks';


function App() 
{

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    const getTasks = async() => {
      const dataFromServer = await fetchTasks()
      setTasks(dataFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks= async() => {
    const res= await fetch('http://localhost:5000/tasks');
    const data= await res.json();
    return data;
  }


  //reminder(left side green color based on reminder state)
  // const taskReminder = (id) => {
  //   console.log(id);
  // }


  const onTaskReminder = async(id) => {    
    setTasks(
      tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))

  }

  // const onTaskReminder = (id) => {
  //   setTasks(
  //     tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))
  // }


//Adding a task
const addTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])
  }


  //Deleting a task
  const deleteTask = async(id) =>
  {
    await fetch(`http://localhost:5000/tasks/${id}`,{
        method: 'DELETE'
      })

    setTasks(tasks.filter((task) => task.id !== id))
  }


    return (
      <Router>
      <div className="container">
        <Header onAdd={ () => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>

      <Routes>
            <Route path='/' exact element= {
          
                  <>
                  {showAddTask && <AddTask onAdd={addTask}/>}
                      
                      {tasks.length > 0 ? 
                      <Tasks tasks={tasks}
                      onDelete={deleteTask} 
                      onReminder={onTaskReminder}/>
                      : ('No tasks to display')}
                  </>
                
                }
              />   
          <Route path='/dashboard' element={<Dashboard />}/>
          
      </Routes>
    <Footer/> 
    </div>
    </Router>
    );
}

export default App;
