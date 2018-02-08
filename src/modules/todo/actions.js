import Dispatcher from '../Dispatcher';
import * as actionTypes from './actionTypes';

export const addItem = value => {
    return Dispatcher.dispatch({
        type: actionTypes.ADD_TODO,
        value
    });
}

export const deleteItem = key => {
    return Dispatcher.dispatch({
        type: actionTypes.REMOVE_TODO,
        key
    });
}

export const completedTask = key_id => {
    return Dispatcher.dispatch({
        type: actionTypes.TOGGLE_TODO_ITEM,
        key_id
    });
}

export const clearCompleted =() => {
    return Dispatcher.dispatch({
        type: actionTypes.REMOVE_ALL_ITEM
    });
}

export const allViewItems =() => {
    return Dispatcher.dispatch({
        type: actionTypes.ALL_VIEW_ITEM
     });
}

export const activeViewItems = () => {
    return Dispatcher.dispatch({
        type: actionTypes.ACTIVE_VIEW_ITEM
     });
}

export const completedViewItems = () => {
    return Dispatcher.dispatch({
        type: actionTypes.COMPLETED_VIEW_ITEM
     });
}

export const editItem = (textIn,key) => {
    return Dispatcher.dispatch({
        type: actionTypes.EDIT_ITEM,
        textIn,
        key
     });
}
