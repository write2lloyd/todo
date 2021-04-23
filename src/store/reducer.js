import * as actionTypes from './actions';
import moment from 'moment';

const initialState = {
  task: '',
  dueDate: moment().format('YYYY-MM-DD'),
  taskList: [],
  loading: false,
  disableAddTaskButton: false
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

  if (action.type === actionTypes.DUEDATE_CHANGED) {
    console.log('inside DUEDATE_CHANGED', action.changeDueDate);
    return {
      ...state,
      dueDate: action.changeDueDate
    }
  }

  if (action.type === actionTypes.TASK_ADDED) {
    console.log('inside TASK_ADDED', action.task);
    return {
      ...state,
      task: '',
      dueDate: moment().format('YYYY-MM-DD'),
      taskList: [action.task, ...state.taskList]
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

  if (action.type === actionTypes.TASK_MARKASPENDING) {
    console.log('inside TASK_MARKASPENDING', action.taskId);
    const task = {
      ...state.taskList[action.taskId],
      status: 0
    }
    const taskList = [...state.taskList];
    taskList[action.taskId] = task;
    return {
      ...state,
      taskList: taskList
    }
  }

  if (action.type === actionTypes.GET_QUOTE_START) {
    console.log('inside GET_QUOTE_START');
    return {
      ...state,
      loading: true,
      disableAddTaskButton: true
    }
  }

  if (action.type === actionTypes.GET_QUOTE_SUCCESS) {
    console.log('inside GET_QUOTE_SUCCESS');
    return {
      ...state,
      loading: false,
      disableAddTaskButton: false
    }
  }

  if (action.type === actionTypes.GET_QUOTE_FAILED) {
    console.log('inside GET_QUOTE_FAILED');
    return {
      ...state,
      loading: false,
      disableAddTaskButton: false
    }
  }

  return state;
}

export default reducer;