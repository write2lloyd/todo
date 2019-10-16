export const TEXT_CHANGED = 'TEXT_CHANGED';
export const TASK_ADDED = 'TASK_ADDED';
export const TASK_DELETED = 'TASK_DELETED';
export const TASK_MARKASDONE = 'TASK_MARKASDONE';

export const textChanged = (changedText) => {
    return {
        type: TEXT_CHANGED,
        changedText: changedText
    }
}

const saveTask = (taskname, status, quote) => {
    return {
        type: TASK_ADDED,
        task: {
            name: taskname,
            status: status,
            quote: quote
        }
    }
}

export const taskAdded = (taskname, status) => {
    return async dispatch => {
        try {
            let response = await fetch('https://api.quotable.io/random');
            const data = await response.json()
            console.log("data", data);
            dispatch(saveTask(taskname, status, data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const taskDeleted = taskId => {
    return {
        type: TASK_DELETED,
        taskId: taskId
    }
}

export const taskMarkAsDone = taskId => {
    return {
        type: TASK_MARKASDONE,
        taskId: taskId
    }
}