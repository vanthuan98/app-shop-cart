import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './Actions/actions';

class TaskContent extends Component {

    deleteItem(id) {
        this.props.deleteItem(id);
        window.location.reload();
    }

    editItem =(item, index) => {
        this.props.editItem(item, index);
    }

    render() {
        const { listItem, keywordSearch, sortItem } = this.props;
        let itemsShow;

        if (keywordSearch.trim().length === 0) {
            itemsShow = [...listItem];
        } else {
            itemsShow = listItem.filter(item => item.name.toLowerCase().indexOf(keywordSearch) !== -1)
        }
        
        if (sortItem === 'A-Z') {
            itemsShow.sort(function (a, b) {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                if (x > y) { return 1 }
                if (x < y) { return -1 }
                return 0;
            });
        }
        if (sortItem === 'Z-A') {
            itemsShow.sort(function (a, b) {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                if (x > y) { return -1 }
                if (x < y) { return 1 }
                return 0;
            });
        }

        const items = itemsShow.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.status ? 'Đang học' : 'Đã nghĩ'}</td>
                    <td>
                        <button className="ctrl-edit"
                            onClick={() => this.editItem(item, index)}>Sửa</button>
                        <button className="ctrl-delete"
                            onClick={() => this.deleteItem(item.id)}>Xoá
                        </button>
                    </td>
                </tr>
            )
        });
        return (
            <div className="task-content">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        { items }
                    </tbody>
                </table>
            </div>
        )
    }   
}
const mapStateToProps = (state) => {
    return {
        listItem: state.items,
        keywordSearch: state.searchItem,
        sortItem: state.sortItem,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => {
            dispatch(actions.deleteItem(id));
        },
        editItem: (item, index) => {
            dispatch(actions.editItem(item, index));
        }
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContent);
