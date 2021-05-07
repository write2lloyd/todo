export const GET_QUOTE_START = "GET_QUOTE_START";
export const GET_QUOTE_SUCCESS = "GET_QUOTE_SUCCESS";
export const GET_QUOTE_FAILED = "GET_QUOTE_FAILED";
export const TASK_ADDED = 'TASK_ADDED';
export const TASK_DELETED = 'TASK_DELETED';
export const TASK_MARKASDONE = 'TASK_MARKASDONE';
export const TASK_MARKASPENDING = 'TASK_MARKASPENDING';

const saveTask = (taskname: string, dueDate: string, status: number, quote: string) => {
  return {
    type: TASK_ADDED,
    task: {
      name: taskname,
      dueDate: dueDate,
      status: status,
      quote: quote
    }
  }
}

export const taskAdded = (taskname: string, dueDate: string, status: number) => {
  return async (dispatch: any) => {
    return new Promise(async (resolve: Function, reject: Function) => {
      try {
        let response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        dispatch(saveTask(taskname, dueDate, status, data));
        resolve();
      } catch (err) {
        console.log(err);
        reject();
      }
    })
  }
}

export const taskDeleted = (taskId: number) => {
  return {
    type: TASK_DELETED,
    taskId: taskId
  }
}

export const taskMarkAsDone = (taskId: number) => {
  return {
    type: TASK_MARKASDONE,
    taskId: taskId
  }
}

export const taskMarkAsPending = (taskId: number) => {
  return {
    type: TASK_MARKASPENDING,
    taskId: taskId
  }
}