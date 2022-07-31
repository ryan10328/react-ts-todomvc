import React, {Component} from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export interface Props {
    items: any[];
}

class TodoList extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.items.map(item => {
                        return (
                            <TodoListItem />
                        )
                    })
                }
            </ul>
        )
    }
}


export default TodoList;
