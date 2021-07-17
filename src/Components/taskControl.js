import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import * as actions from './Actions/actions';
   
class TaskControl extends Component {
    constructor(props) {
        super(props);
        this.inputSearch = React.createRef();
    }

    onSearch = (keyword) => {
        this.props.onSearchItem(keyword.current.value);
        this.inputSearch.current.value = '';
    }

    onSortItem = (typeSort) => {
        this.props.onSortItem(typeSort)
    }

    render() {
        return (
            <div className="task-control row">
                <div className="col-md-9 search-ctrl">
                    <input type="text" ref={this.inputSearch}/>
                    <button onClick={() => this.onSearch(this.inputSearch)}>Tìm kiếm</button>
                </div>
                <div className="col-md-3 sort-form">
                    <button className="sort-ctrl">Sắp xếp</button>
                    <ul className="dropdown-menu-sort">
                        <li onClick={() => this.onSortItem('')} >Mặc Định</li>
                        <li onClick={() => this.onSortItem('A-Z')}>Từ A - Z</li>
                        <li onClick={() => this.onSortItem('Z-A')}>Từ Z - A</li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchItem: (keyword) => {
            dispatch(actions.searchItem(keyword));
        },
        onSortItem: (typeSort) => {
            dispatch(actions.sortItem(typeSort));
        }
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(TaskControl);
