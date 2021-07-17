import React, { Component } from 'react';
import * as actions from './Actions/actions';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputStatus = React.createRef();
    }

    saveItem = (e) => {
        e.preventDefault();
        const { itemEdit } = this.props;
        let valueName = this.inputName.current.value;
        let valueStatus = this.inputStatus.current.value === 'Đang học' ? true : false;
        if (itemEdit[0].editing) {
            let item = {
                id: itemEdit[1].id,
                name: valueName,
                status: valueStatus,
            }
            if (valueName.trim().length === 0) {
                this.inputName.current.value = '';
                this.props.changeEditing({ editing: false });
                return
            } else {
                this.props.saveItem(item);
                this.props.changeEditing({ editing: false });
                this.inputName.current.value = '';
                return
            }
        } else {
            let item = {
                id: uuidv4(),
                name: valueName,
                status: valueStatus,
            }
            if (valueName.trim().length === 0) {
                this.inputName.current.value = '';
                return
            } else {
                this.props.saveItem(item);
                this.inputName.current.value = '';
            }
        }
    }

    cancelAddItem(e) {
        e.preventDefault();
        this.inputName.current.value = '';
    }

    

    render() {
        const { itemEdit } = this.props;
    
        return (
            <section className="task-form ">
                <div className="title">
                    <h4>{ !itemEdit[0].editing ? 'Thêm sinh viên' : 'Sửa sinh viên' }</h4>
                    <span className="close-form">x</span>
                </div>
                <form className="form-control">
                    <div className="input-name">
                        <label>Tên</label>
                        <input type="text"
                            defaultValue={itemEdit[0].editing === false ? '' : this.inputName.current.value = itemEdit[1].name} 
                            ref={this.inputName} />
                    </div>
                    <div className="input-status">
                        <label>Tình trạng</label>
                        <select ref={this.inputStatus} >
                            <option>Đang học</option>
                            <option>Đã nghĩ</option>
                        </select>
                    </div>
                    <div className="ctrl-task-form">
                        <button onClick={(e) => this.saveItem(e)}>Lưu lại</button>
                        <button onClick={(e) => this.cancelAddItem(e)}>Huỷ</button>
                    </div>
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemEdit: state.editItem,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveItem: (value) => {
            dispatch(actions.addItem(value));
        },
        changeEditing: (item) => {
            dispatch(actions.editItem(item));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
