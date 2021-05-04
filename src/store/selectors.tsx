export const getAllTodosOrderedByDueDate = (state: any) => {
  return state.taskList.sort((a: any, b: any) => +new Date(b.dueDate) - +new Date(a.dueDate))
}