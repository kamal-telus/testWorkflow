import { useEffect, useState } from "react";

const Welcome = (props) => {
  const [name, setName] = useState(props.name);
  const [task, setTask] = useState('');

  const saveTask = () => {
    const taskList = [ ...task ]
    taskList.push(name);
    localStorage.setItem('task', JSON.stringify(taskList));
    setTask(taskList);
    console.log('saveTask');
  }

  // const getTask = () => {
  //   const task = localStorage.getItem('task');
  //   console.log('getTask=====', task);
  //   return task;
  // }

  useEffect(() => {
    
    console.log('useEffect');
  }, [task]);

  return (
    <div className="welcome" data-testId='welcome'>
      <p>
        To Do, {name}!
      </p>
      <input type="text" name="task" value={name} placeholder="Enter task..." onChange={(e) => setName(e.target.value)} />
      &nbsp;
      <input type="button" name="add" value={'Save Task'} onClick={saveTask} />
      <div className="taskList">
        <p> Task List </p>
        <ul>
          { task.length > 0 && task.map((t, i) => <li key={i}>{t}</li>) }
        </ul>
      </div>
    </div>
  );
}

export default Welcome;
