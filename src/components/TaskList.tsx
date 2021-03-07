import { Component } from "react";
import { Tasks } from "../tasks/tasks";
import { context } from '../common';

class TaskList extends Component {
    tasks: Tasks[] = [];
    async loadTasks() {
        this.tasks = await context.for(Tasks).find();
        this.setState({});
    }
    componentDidMount() {
        this.loadTasks();
    }
    async addTask() {
        let t = context.for(Tasks).create();
        t.name.value = this.newTaskName;
        await t.save();
        this.newTaskName = '';
        this.loadTasks();
    }
    newTaskName: string = '';

    render() {
        return <div>
            <h3>Tasks</h3>
            <input value={this.newTaskName} onChange={x => { this.newTaskName = x.target.value; this.setState({}) }}></input>
            <button onClick={() => this.addTask()}>Add Task</button>
            <ul>
                {this.tasks.map(t => (
                    <li key={t.id.value}>{t.name.value}
                    </li>))}
            </ul>
        </div>
    }
}
export default TaskList;