import * as actionTypes from './actions';

const initialState = {
    task: '',
    taskList: []
}

const reducer = (state = initialState, action) => {
    console.log('inside reducer');
    if (action.type === actionTypes.TEXT_CHANGED) {
        console.log('inside TEXT_CHANGED', action.changedText);
        return {
            ...state,
            task: action.changedText
        }
    }
    if (action.type === actionTypes.TASK_ADDED) {
        console.log('inside TASK_ADDED', action.task);
        return {
            ...state,
            taskList: state.taskList.concat(action.task)
        }
    }
    if (action.type === actionTypes.TASK_DELETED) {
        console.log('inside TASK_DELETED', action.taskId);
        const updatedTaskList = state.taskList.filter((_task, index) => {
            return index !== action.taskId;
        });
        console.log('updatedTaskList', updatedTaskList);
        return {
            ...state,
            taskList: updatedTaskList
        }
    }
    if (action.type === actionTypes.TASK_MARKASDONE) {
        console.log('inside TASK_MARKASDONE', action.taskId);
        const task = {
            ...state.taskList[action.taskId],
            status: 1
        }
        const taskList = [...state.taskList];
        taskList[action.taskId] = task;
        return {
            ...state,
            taskList: taskList
        }
    }
    return state;
}

export default reducer;