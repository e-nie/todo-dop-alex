import React, {ChangeEvent, FC} from 'react';
import {TasksStateType, TaskType} from './App';
import Button from "./Button";

type PropsType = {
    changeTaskStatus: (todolistId: string, taskId: number, isDone: boolean) => void
    removeTask: (todolistId: string, taskId: number) => void
    todolistId: string
    taskId: number
    title: string
    isDone: boolean
}
export const Task: FC<PropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.todolistId, props.taskId, e.currentTarget.checked)
    }

    const removeTaskHandler = () => {
        props.removeTask(props.todolistId, props.taskId)
    }
    return (
        <ul>

                        <>
                        <span>{props.title}</span>
                        <input type = 'checkbox' checked = {props.isDone} onChange = {onChangeHandler}
                        />
                        </>



            <Button name = 'x' callback = {removeTaskHandler} />
        </ul>
    );
};
