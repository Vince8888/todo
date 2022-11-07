import React, { useRef } from 'react'

const AddTask = (props) => {

    const inputTask = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTask(inputTask.current.value)
        props.history.push('/')
    }
    return (
        <section>
            <h1 className="m-3">Nouvelle tâche</h1>
            <div className="card mx-3">
                <form className="card-body" onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <label form="taskName">Nom de la tâche</label>
                        <input type="text" className="form-control" name="taskName" id="taskName" required ref={inputTask} />
                    </div>
                    <button type="submit" className="btn btn-primary">Créer</button>
                </form>
            </div>
        </section>
    )
}


export default AddTask