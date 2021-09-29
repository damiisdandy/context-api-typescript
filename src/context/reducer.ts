
const reducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return { ...state, isDark: !state.isDark }
    case "ADD_TODO":
      const mostRecentTodo = state.todos.sort((a, b) => b.id - a.id).pop();
      return {
        ...state, todos: [
          ...state.todos,
          {
            id: mostRecentTodo ? mostRecentTodo.id + 1 : 0,
            ...action.payload
          }
        ]
      };
    default:
      return state;
  }
}

export default reducer;