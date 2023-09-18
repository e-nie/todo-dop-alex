import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist'
import {v4 as uuidv4} from 'uuid';

export type TaskType = {
    taskId: number,
    title: string,
    isDone: boolean
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type FilterValuesType = 'all' | 'active' | 'completed'

export type TodolistType = {
    todolistId: string
    title: string
    filter: FilterValuesType
}

function App() {
    //
    const todolist_1 = uuidv4()
    const todolist_2 = uuidv4()

    const [todolists, setTodolists] = useState<TodolistType[]>([
        {todolistId: todolist_1, title: 'What to do', filter: 'all'},
        {todolistId: todolist_2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todolist_1]: [
            {taskId: 1, title: 'To eat', isDone: true},
            {taskId: 2, title: 'To sleep', isDone: true},
            {taskId: 3, title: 'To drink', isDone: false},
        ],
        [todolist_2]: [
            {taskId: 1, title: 'Tea', isDone: true},
            {taskId: 2, title: 'Coffee', isDone: true},
            {taskId: 3, title: 'Prosecco', isDone: false}
        ]
    })

    const removeTask = (todolistId: string, taskId: number) => {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.taskId !== taskId)})
    }

    const changeTaskStatus = (todolistId: string, taskId: number, isDone: boolean) => {
        console.log({todolistId, taskId, isDone})
        setTasks({...tasks, [todolistId]: tasks[todolistId]
                .map(el => el.taskId === taskId ? {...el, isDone: isDone} : el)})
    }

    return (
        <div className = "App">
            {todolists.map(t => <Todolist
                    todolistId = {t.todolistId}
                    title = {t.title}
                    tasks = {tasks[t.todolistId]} // достаем таски из нужного туду листа
                    changeTaskStatus = {changeTaskStatus}
                    removeTask = {removeTask}
                />
            )}
        </div>
    );
}

export default App;
