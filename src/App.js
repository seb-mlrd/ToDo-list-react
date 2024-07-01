import './App.css';
import TaskBar from './component/TaskBar';
import ShowTask from './component/ShowTask';
import { useEffect, useState } from 'react';

function App() {

  const savedTask = localStorage.getItem('newTask')
  const [task, updateTask] = useState(savedTask ? JSON.parse(savedTask) : [])
  useEffect(() => {
      localStorage.setItem('newTask', JSON.stringify(task))
  }, [task])

  const [button, setButton] = useState(false);

  return (<div className='contentTask'>
          {button && (
            <TaskBar task={task} updateTask={updateTask} setButton={setButton}/>
          )}
          <ShowTask task={task} updateTask={updateTask}/>
          <button className="addTask" onClick={()=>setButton(true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
        </div>
  );
}

export default App;
