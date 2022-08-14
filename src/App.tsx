import './App.scss'
import React, {KeyboardEvent, useState} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TodoList from './TodoList/TodoList';

export interface Props {

}

export interface State {
    todoItems: any[];
}

const App: React.FC<Props> = (props: Props) => {
    const [state, setState] = useState<State>({
        todoItems: []
    })

    const handleKeyDown = (evt: KeyboardEvent, keyword: string) => {
        const items = [...state.todoItems, {name: keyword}];
        setState({
            todoItems: items,
        });
    }

    return (
        <div className="App">
            <section className="todoapp">
                <Header
                    handleKeyDown={(event: KeyboardEvent, keyword: string) => handleKeyDown(event, keyword)}/>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox"/>
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <TodoList items={state.todoItems}/>
                </section>
                <Footer/>
            </section>
        </div>
    )
}

export default App;
