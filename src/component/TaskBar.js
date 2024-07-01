
import { useState} from "react"

function TaskBar({task, updateTask, setButton}){

    const [newTask, addTask] = useState('')

    const handleChangeTask = (event) => {
        addTask(event.target.value);
      };


    return(
        <div className="taskBar">
                <input type="text" id="tache" placeholder="rentrez votre tâche" value={newTask} onChange={handleChangeTask}/>
                <button className="addButton" onClick={()=>{
                    newTask ? updateTask([...task, newTask]) : alert("rentrez une tâche");
                    addTask('');
                    setButton(false)
                }}>Ajoutez une tâche</button>
                <button className="closeButton" onClick={()=>{setButton(false)}}>Fermer</button>
        </div>
    )
}

export default TaskBar