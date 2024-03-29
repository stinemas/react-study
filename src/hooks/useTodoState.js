import { useState } from "react";
import UseLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

// eslint-disable-next-line import/no-anonymous-default-export
export default initialTodos => {
   const [todos, setTodos] = UseLocalStorageState("todos", initialTodos);

   return {
      todos,
      addTodo: newTodoText => {
         setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
      },

      removeTodo: todoId => {
         const updatedTodos = todos.filter(todo => todo.id !== todoId
         );
         setTodos(updatedTodos);
      },

      toggleTodo: todoId => {
         const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
         );
         setTodos(updatedTodos);
      },

      editTodo: (todoId, newTask) => {
         const updatedTodos = todos.map(todo =>
            todo.is === todoId ? { ...todo, task: newTask } : todo
         );
         setTodos(updatedTodos);
      }
   }
}
