import React, { Component } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export interface Props {
  items: any[];
}

const TodoList: React.FC<Props> = (props: Props) => {
  return (
    <ul className="todo-list">
      {
        props.items.map(item => {
          return (
            <TodoListItem />
          )
        })
      }
    </ul>
  )
}




export default TodoList;
