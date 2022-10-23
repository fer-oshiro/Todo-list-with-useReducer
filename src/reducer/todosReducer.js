function todosReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const id = Date.now();
      const createdAt = new Date();
      return [...todos, { id, createdAt, completed: false, ...action.todo }];
    }
    case "TOGGLE_TODO": {
      return todos.map((todo) =>
        action.index === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    case "DELETE_TODO": {
      return todos.filter((todo) => action.index !== todo.id);
    }
    case "EDIT_TODO": {
      return todos.map((todo) =>
        action.index === todo.id ? { ...todo, ...action.todo } : todo
      );
    }
    default:
      return todos;
  }
}

export default todosReducer;

export function createTodoAction(newTodo) {
  return {
    type: "ADD_TODO",
    todo: newTodo
  };
}

export function toggleTodoAction(todoIndex) {
  return {
    type: "TOGGLE_TODO",
    index: todoIndex
  };
}

export function deleteTodoAction(todoIndex) {
  return {
    type: "DELETE_TODO",
    index: todoIndex
  };
}

export function editTodoAction(todoIndex, newTodo) {
  return {
    type: "EDIT_TODO",
    index: todoIndex,
    todo: newTodo
  };
}
