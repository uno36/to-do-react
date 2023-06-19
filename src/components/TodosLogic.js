import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodosProvider } from '../context/TodosContext';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const delTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosProvider>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} setTodos={setTodos} delTodo={delTodo} />
    </TodosProvider>
  );
};

export default TodosLogic;
