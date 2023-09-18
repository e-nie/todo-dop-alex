import React, {FC} from 'react';
import {Task} from './Task';
import {TasksStateType, TaskType} from './App';


type PropsType = {
    title: string
    tasks: TaskType[]
    changeTaskStatus: (todolistId: string, taskId: number, isDone: boolean) => void
    removeTask: (todolistId: string, taskId: number) => void
    todolistId:string


}
export const Todolist: FC<PropsType> = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            {props.tasks.map(t => {
                return (
                    <Task key = {t.taskId} changeTaskStatus = {props.changeTaskStatus}
                          removeTask = {props.removeTask}
                          todolistId = {props.todolistId}
                          taskId={t.taskId}
                          title={t.title}
                          isDone={t.isDone}
                    />
                )
            })}
        </div>
    );
};
