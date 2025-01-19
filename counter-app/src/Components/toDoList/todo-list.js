import React,{useState} from "react";
import "./todo-list.css";


function TodoApp(){
    const [task,setTask] = useState("");
    const [taskList,setTaskList] = useState([]);

    //handleAddTask
    const handleAddTask =() =>{
        if (task){
            setTaskList([...taskList,{id:Date.now(),name:task,completed:false},]);
            setTask("");  //clear after added task into task list
        }
        console.log(taskList);
    };

    //handleToggleComplete
    const handleToggleComplete=(id) =>{
        setTaskList(taskList.map((task) => task.id === id ? {...task,completed: !task.completed}:task));
    };

    //handleDeleteTask
    const handleDeleteTask=(id) =>{
        setTaskList(taskList.filter((task) => task.id !== id));
    }

    return(
        <div className="todo-app">
            <h1>To-Do List</h1>
            {/* //task input */}
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a Task"/>
            <button onClick={handleAddTask}>Add</button>

            {/* //task list output */}
            <ul>
                {taskList.map((task) => (
                    <li key={task.id}>{task.name} 
                        <button onClick={()=> handleToggleComplete(task.id)}>{task.completed? "Undo":"Complete"}</button>
                        <button onClick={()=> handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TodoApp;