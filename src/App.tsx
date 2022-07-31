import './App.scss'
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
                    </section>
                    <Footer/>
                </section>
            </div>
        )
    }
}

export default App;
