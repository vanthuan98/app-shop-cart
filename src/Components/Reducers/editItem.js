import * as constants from '../Constants/constants'

const initialState = [
    {
        editing: false,
    },
]

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.EDIT_ITEM:
            if (action.item.id) {
                state[0].editing = true;
                state[1] = action.item;
                state[2] = action.index;
            } else {
                state[0].editing = false;
                state.splice(1, 2);
            }
            return [...state];
        default: return [...state];
    }
}

export default myReducers;