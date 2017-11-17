import React, {Component} from 'react';
import {saveTask, getAllTasks} from '../helpers/ApiHelper'

const style = {
    input : {
        marginBottom: "10px",
    }
}

class TodoManagerContainer extends Component {

    state = {
        task : "",
        tasks : [],
    }

    componentDidMount() {
        getAllTasks()
            .then(tasks => {
                this.setState({
                    tasks
                })
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        saveTask(this.state.task)
            .then(task => getAllTasks())
            .then(tasks => {
                this.setState({
                    tasks,
                    task : ""
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} >
                    <input type="text" name="task" style={style.input} value={this.state.task} onChange={this.handleInputChange} />
                    <button>Cadastrar</button>
                </form>

                <table>
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                    {this.state.tasks.map(task => (
                        <tr key={task._id}>
                            <td>{task.task}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                    
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoManagerContainer;