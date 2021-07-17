import * as constants from './../Constants/constants';

export const listItem = () => {
    return {
        type: constants.LIST_ITEM,
    }
}

export const addItem = (item) => {
    return {
        type: constants.ADD_ITEM,
        item,
    }
}

export const deleteItem = (id) => {
    return {
        type: constants.DELETE_ITEM,
        id,
    }
}

export const editItem = (item, index) => {
    return {
        type: constants.EDIT_ITEM,
        item,
        index,
    }
}
 
export const searchItem = (keyword) => {
    return {
        type: constants.SEARCH_ITEM,
        keyword
    }
}

export const sortItem = (typeSort) => {
    return {
        type: constants.SORT_ITEM,
        typeSort,
    }
}