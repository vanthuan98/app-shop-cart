import * as constants from '../Constants/constants'

const initialState = '';

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_ITEM:
            return action.keyword;
        default: return state;
    }
}

export default myReducers;