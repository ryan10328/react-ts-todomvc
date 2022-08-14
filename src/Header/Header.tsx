import React, {ChangeEvent, KeyboardEvent, Component, useState} from 'react';

export interface Props {
    handleKeyDown: Function;
}

export interface State {
    keyword: string;
}

const Header: React.FC<Props> = (props: Props) => {
    const [state, setState] = useState<State>({
        keyword: ''
    });

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const val = evt.target.value;
        setState({
            keyword: val
        })
    }
    const onKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
        if (evt.key.toLowerCase() === 'enter') {
            props.handleKeyDown(evt, state.keyword);
            setState({
                keyword: ''
            });
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?"
                   value={state.keyword}
                   onChange={event => onChange(event)}
                   onKeyDown={event => onKeyDown(event)}/>
        </header>
    )
}


export default Header;
