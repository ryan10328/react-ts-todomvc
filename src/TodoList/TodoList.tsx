import React from 'react';

export interface Props {

}

class TodoList extends React.Component<Props> {
    render() {
        return (
            <ul className="todo-list">
                <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>Taste JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" value="Create a TodoMVC template"/>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox"/>
                        <label>Buy a unicorn</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" value="Rule the web"/>
                </li>
            </ul>
        )
    }
}


export default TodoList;
