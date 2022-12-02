import { useState } from "react"
const AddTask = ({onAdd}) => {
    const[text,setText]=useState('')
    const[date,setDay]=useState('')
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('Please add task')
            return
        }
        onAdd({text,date})
        setText('')
        setDay('')
    }
  return (
    
      <form className='add-form' onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add task" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day and Time</label>
            <input type='text' placeholder="Add day & time" value={date} onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <input type='submit' value='Save task' className="btn btn-block"/>
      </form>
    
  )
}

export default AddTask
