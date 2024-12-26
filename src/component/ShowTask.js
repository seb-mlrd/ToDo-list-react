import { useState } from "react";


function ShowTask({task, updateTask, newDate}){

    //function qui retourne la date d'aujourd'hui
    const today = new Date();

    function getDate() {
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        return `${date < 10 ? '0' + date : date}/${month < 10 ? '0' + month : month}/${year}   ${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

    //function permettant de supprimé une tâche
    function removeTask(index){
        if(index >= 0 && index <  task.length){

            const duplicateTask = [...task];

            duplicateTask.splice(index, 1)

            updateTask(duplicateTask)
        }
    }


    //function pour rayer les tâches séléctionner
    const [checkedStates, setCheckedStates] = useState(new Array(task.length).fill(false));

    function handleCheckboxChange(index) {
        const updatedCheckedStates = [...checkedStates];
        updatedCheckedStates[index] = !updatedCheckedStates[index];
        setCheckedStates(updatedCheckedStates);
    }

    return(
        <div>
            <h1 className="titleTask">ToDo list</h1>
            <h2 className="titleTask">{getDate()}</h2>
            <p>{task.length} tâche{task.length > 1 && "s"} à faire</p>
            <ul>
                {task.map((value, index) => (
                    <li key={index} className="listTask">
                        <input type="checkbox"
                            checked={checkedStates[index]} 
                            onChange={() => handleCheckboxChange(index)} 
                        />
                        <span className={`${checkedStates[index] & (newDate < today) ? 'checked' : ''}`}>{value} {newDate}</span>
                        <button onClick={()=>removeTask(index)} className="trash"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default ShowTask;