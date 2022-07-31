import './App.scss'
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TodoList from './TodoList/TodoList';

export interface Props {

}

class App extends React.Component<Props> {
    render() {
        return (
            <div className="App">
                <section className="todoapp">
                    <Header/>
                    <section className="main">
                        <input id="toggle-all" className="toggle-all" type="checkbox"/>
                        <label htmlFor="toggle-all">Mark all as complete</label>
                        <TodoList/>
                    </section>
                    <Footer/>
                </section>
            </div>
        )
    }
}

export default App;
