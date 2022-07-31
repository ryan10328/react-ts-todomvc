import React, {Component} from 'react';

export interface Props {

}

class TodoListItem extends Component<Props> {
    render() {
        return (
            <li className="completed">
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>Taste JavaScript</label>
                    <button className="destroy"></button>
                </div>
                <input className="edit" value="Create a TodoMVC template" onChange={event => {
                }}/>
            </li>
        )
    }
}

export default TodoListItem;


// <li>
//     <div className="view">
//         <input className="toggle" type="checkbox"/>
//         <label>Buy a unicorn</label>
//         <button className="destroy"></button>
//     </div>
//     <input className="edit" value="Rule the web"/>
// </li>
