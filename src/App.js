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

    // addItem = (valueName, valueStatus ,index) => {
    //     const editting = {
    //         editStatus: false,
    //         editTaskIndex: null,
    //     };
    //     if (index === null) {
    //         this.setState({
    //             taskItems: this.state.taskItems.concat({
    //                 name: valueName,
    //                 status: valueStatus,
    //             }),
    //             editting: editting,
    //         })
    //     } else {
    //         let taskItems = this.state.taskItems;
    //         taskItems[index] = {
    //             name: valueName,
    //             status: valueStatus,
    //         }
    //         this.setState({
    //             taskItems: taskItems,
    //             editting: editting,
    //         })
    //     }
    // }

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

    // componentDidUpdate() {
    //     window.localStorage.setItem('key', JSON.stringify(this.state.taskItems));
    // }

    // componentDidMount() {
    //     let item = window.localStorage.getItem('key');
    //     if (item === null) {
    //         return
    //     } else {
    //         this.setState({
    //             taskItems: JSON.parse(item)
    //         })
    //     }
    // }
    
}

export default App;
