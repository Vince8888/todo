import React from 'react'

const ToDo = (props) => {

    const toggleCompleted = () => {
        props.onToggleCompleted(props.task.id)
    }
    return (
        <li className="list-group-item d-flex align-tiems-center">
            {props.task.title}
            <button className={"btn btn-sm ml-auto " + (props.task.completed ? 'btn-success' : 'btn-outline-success')} onClick={() => toggleCompleted()}>&#x2713;</button>
        </li>
    )
}

export default ToDo