import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ tasks, match, onToggleCompleted }) => {
    let filteredTasks = [];

    switch (match.params.filter) {
        case 'completed':
            console.log("completed")
            filteredTasks = tasks.filter(task => task.completed)
            break;
        default:
            filteredTasks = tasks
    }
    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                {
                    filteredTasks.length === 0 ? "Aucune tâche à afficher" :
                        filteredTasks.map((task, id) => <ToDo task={task} key={id} onToggleCompleted={onToggleCompleted} />)

                }
            </ul>
        </>);
}

export default ToDoList