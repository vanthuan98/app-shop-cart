import * as constants from '../Constants/constants'

const initialState = '';

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.SORT_ITEM:
            return action.typeSort;
        default: return state;
    }
}

export default myReducers;