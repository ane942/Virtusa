import Header from './component/Header'
import './App.css';
import Tasks from './component/Tasks';
import { useState } from "react";
import AddTask from './component/AddTask';
const App=()=> {
  const [showAddTask,setShowAddTask]=useState(false)
  
  //delete
  const addTask=(task)=>{
    console.log(task)
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id,...task}
    //console.log(newTask)
    setTasks([...tasks,newTask])
  }
  

  const [tasks,setTasks]=useState(
        [{
            id:1,
            text:'Function',
            date:'Dec 5th at 11am',
        },
        {
            id:2,
            text:'Meeting',
            date:'Dec 7th at 3pm',
        },
        {
            id:3,
            text:'Exam',
            date:'Jan 18 at 10am',
        }]
    )
    const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
    }
  return (
    <div className="container">
      <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask} />}
                
      <AddTask onAdd={addTask}/>
     {tasks.length>0?( <Tasks tasks={tasks} onDelete={deleteTask}/>):('No tasks')}
    </div>
  )
}

export default App;
