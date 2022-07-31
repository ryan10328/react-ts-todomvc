import './App.scss'
import React, {KeyboardEvent, Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TodoList from './TodoList/TodoList';

export interface Props {

}

export interface State {
    todoItems: any[];
}

class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

    }

    state: State = {
        todoItems: [],
    };

    handleKeyDown(evt: KeyboardEvent, keyword: string) {
        const items = [...this.state.todoItems, {name: keyword}];
        this.setState({
            todoItems: items,
        });
    }


    render() {
        return (
            <div className="App">
                <section className="todoapp">
                    <Header
                        handleKeyDown={(event: KeyboardEvent, keyword: string) => this.handleKeyDown(event, keyword)}/>
                    <section className="main">
                        <input id="toggle-all" className="toggle-all" type="checkbox"/>
                        <label htmlFor="toggle-all">Mark all as complete</label>
                        <TodoList items={this.state.todoItems}/>
                    </section>
                    <Footer/>
                </section>
            </div>
        )
    }
}

export default App;
