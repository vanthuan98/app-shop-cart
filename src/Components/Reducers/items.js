import * as constants from '../Constants/constants'

const dataLocal = JSON.parse(localStorage.getItem('items'));
const initialState = dataLocal ? dataLocal : [];

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.LIST_ITEM:
            return [...state];
        case constants.ADD_ITEM:
            let index;
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === action.item.id) {
                    index = i;
                }
            }
            if (index !== undefined) {
                state.splice(index, 1, action.item);

            } else {
                state.push(action.item);
            }
            localStorage.setItem('items', JSON.stringify(state));
            return [...state];
        case constants.DELETE_ITEM:
            const newItems = state.filter((item) => item.id !== action.id);
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        default: return [...state];
    }
}

export default myReducers;