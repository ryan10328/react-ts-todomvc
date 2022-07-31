import React, {Component} from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export interface Props {

}

class TodoList extends Component<Props> {
    render() {
        return (
            <ul className="todo-list">
                <TodoListItem/>
            </ul>
        )
    }
}


export default TodoList;
