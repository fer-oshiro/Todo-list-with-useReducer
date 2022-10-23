import React from "react";
import todosReducer, {
  createTodoAction,
  deleteTodoAction,
  editTodoAction,
  toggleTodoAction
} from "../reducer/todosReducer";

const TodoContext = React.createContext();

export function TodoProvider(props) {
  const [todos, todosDispatch] = React.useReducer(todosReducer, []);

  const createTodo = React.useCallback((newTodo) => {
    todosDispatch(createTodoAction(newTodo));
  }, []);

  const toggleTodo = React.useCallback((todoIndex) => {
    todosDispatch(toggleTodoAction(todoIndex));
  }, []);

  const editTodo = React.useCallback((todoIndex, newTodo) => {
    todosDispatch(editTodoAction(todoIndex, newTodo));
  }, []);

  const deleteTodo = React.useCallback((todoIndex) => {
    todosDispatch(deleteTodoAction(todoIndex));
  }, []);

  const value = React.useMemo(
    () => ({
      todos,
      createTodo,
      toggleTodo,
      editTodo,
      deleteTodo
    }),
    [todos]
  );

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
}

export function useTodos() {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}
