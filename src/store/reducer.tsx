import * as actionTypes from './actions';
import moment from 'moment';

interface IAppState {
  task: string,
  dueDate: string,
  taskList: Array<{ name: string, dueDate: string, status: number, quote: string, author: string }>
}

const initialState: IAppState = {
  task: '',
  dueDate: moment().format('YYYY-MM-DD'),
  taskList: [],
}

const reducer = (state = initialState, action: any) => {
  if (action.type === actionTypes.TASK_ADDED) {
    return {
      ...state,
      task: '',
      dueDate: moment().format('YYYY-MM-DD'),
      taskList: [action.task, ...state.taskList]
    }
  }

  if (action.type === actionTypes.TASK_DELETED) {
    const updatedTaskList = state.taskList.filter((_task, index) => {
      return index !== action.taskId;
    });
    return {
      ...state,
      taskList: updatedTaskList
    }
  }

  if (action.type === actionTypes.TASK_MARKASDONE) {
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

  return state;
}

export default reducer;