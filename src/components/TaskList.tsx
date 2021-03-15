import { Component } from "react";
import { Tasks } from "../tasks/tasks";
import { context } from '../common';
import React from "react";



function TaskList() {
    let [task, setTask] = React.useState(() => context.for(Tasks).create());



    return <div>
        <h1>Task List</h1>
        <ul>
            <TaskInList t={task}></TaskInList>
        </ul>
    </div>
}
export default TaskList;


export function TaskInList(props: { t: Tasks }) {
    let [taskName, setTaskName] =
        React.useReducer((x:any, y:any) => {
            props.t.name.inputValue = x;
            
            return x;
        }, props.t.name.value)
    // React.useState(props.t.name.inputValue);

    return <li >

        <input value={taskName} onChange={x => {
            setTaskName(props.t.name.inputValue);
        }} />{props.t.name.inputValue}
    </li>
}
