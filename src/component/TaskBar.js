
import { useState} from "react"

function TaskBar({task, updateTask, setButton, newDate, setNewDate}){

    const [newTask, addTask] = useState('')

    const handleChangeTask = (event) => {
        addTask(event.target.value);
      };
    
    const [isBeforeDate, setIsBeforeDate] = useState(null)

    
    const handleChangeDate = (e) => {
        const selectedDate = new Date(e.target.value)
        const today = new Date()

        selectedDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);

        if(selectedDate < today){
            setIsBeforeDate(selectedDate)
        }else{
            setIsBeforeDate(null)
        }
        setNewDate(e.target.value)

        if(isBeforeDate !== null){
            alert("La date est antérieur à la date d'aujourd'hui")
        }
    };


    return(
        <div className="taskBar">
                <p className="lb">Rédigez votre tâche</p>
                <input type="text" className="infos" value={newTask} onChange={handleChangeTask}/>
                <input type="date"  className="infos" value={newDate} onChange={handleChangeDate}/>
                <button className="addButton" onClick={()=>{
                    isBeforeDate  == null && newTask ? updateTask([...task, newTask]) : alert("rentrez une tâche valide");
                    setButton(false);
                    addTask('');
                }}>Ajoutez une tâche</button>
                <button className="closeButton" onClick={()=>{setButton(false)}}>Fermer</button>
        </div>
    )
}

export default TaskBar