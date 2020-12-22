import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import TodoInput from './TodoInput';

function TodoList() {
  let todos = useSelector((state) => {
    console.log(state, "stateeeeeee");
    return state.todotask;
  });
  return (
    <div className="my-5">
      <TodoInput/>
      {todos && todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
