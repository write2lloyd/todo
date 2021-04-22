export const getAllTodosOrderedByDueDate = (state) => {
  return state.taskList.sort((a,b)=>new Date(b.dueDate) - new Date(a.dueDate))
}