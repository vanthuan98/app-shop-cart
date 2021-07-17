import { combineReducers } from "redux";
import items from './items';
import editItem from './editItem';
import searchItem from './searchItem';
import sortItem from './sortItem';

const myReducers = combineReducers({
    items,
    editItem,
    searchItem,
    sortItem,
});

export default myReducers;