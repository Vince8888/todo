import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import ToDoList from './ToDoList'
import AddTask from './AddTask'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import uniqueid from 'uniqueid'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getTasks();
        //eslint-disable-next-line
    }, []);

    const onDeleteCompleted = () => {
        let newTask = tasks.filter(task => !task.completed);
        setTasks(newTask);
    }
    const onToggleCompleted = (taskId) => {
        let taskToUpdate = tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed
        let newTasks = tasks.map(task => (task.id === taskId ? taskToUpdate : task));
        setTasks(newTasks);
    }
    const onAddTask = (newTaskName) => {
        const newT = {
            userId: 1,
            id: uniqueid,
            title: newTaskName,
            completed: false
        };
        setTasks([...tasks, newT]);
    }

    const getTasks = async () => {
        setIsLoading(true);
        let res = [];
        res = await axios
            .get("http://jsonplaceholder.typicode.com/todos/?userId=1")
        // We can still use the `.catch()` method since axios is promise-based
        setIsLoading(false);
        setTasks(res.data);
    }

    if (isLoading) {
        return (
            <section id="todo">
                <ClipLoader />
            </section>
        );
    } else {
        return (
            <section id="todo">
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={onAddTask} />} />
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={tasks} onToggleCompleted={onToggleCompleted} />} />
                    </Switch>
                    <NavBar onDeleteCompleted={onDeleteCompleted} />
                </BrowserRouter>
            </section>
        )
    }
}

export default App
