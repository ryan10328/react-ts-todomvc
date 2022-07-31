import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export interface Props {

}

class TodoList extends React.Component<Props> {
    render() {
        return (
            <ul className="todo-list">
                <TodoListItem/>
            </ul>
        )
    }
}


export default TodoList;
