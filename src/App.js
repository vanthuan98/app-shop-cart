import './App.css';
import './bootstrap-grid.min.css';

import React, { Component } from 'react';
import TaskForm from './Components/taskForm';
import TaskControl from './Components/taskControl';
import TaskContent from './Components/taskContent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskItems: [],
            editting: {
                editStatus: false,
                editTaskIndex: null,
            },
            wordOnSearch: '',
        }
    }

    editTask = (index) => {
        const editting = {
            editStatus: true,
            editTaskIndex: index,
        }
        this.setState({
            editting: editting,
        });
    }

    valueSearch = (valueSearch) => {
        this.setState({
            wordOnSearch: valueSearch,
        })
    }

    render() {
        const { taskItems, wordOnSearch } = this.state;
        return (
            <div className="App container">
                <h1 className="title-header">Quản Lý Sinh Viên</h1>
                <div className="row">
                    <div className="col-md-4">
                        <TaskForm editTaskItem = {this.state} />
                    </div>
                    <section className="wrapped col-md-8">
                        <TaskControl valueSearch={this.valueSearch} />
                        <TaskContent taskItems={taskItems} deleteItem={this.deleteItem}
                            editTask={this.editTask} wordOnSearch={wordOnSearch}
                        />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
