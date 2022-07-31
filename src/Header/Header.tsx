import './Header.scss';
import React from 'react';

export interface Props {

}

class Header extends React.Component<Props> {

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?"/>
            </header>
        )
    }
}

export default Header;
