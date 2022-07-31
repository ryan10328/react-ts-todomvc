import React, {ChangeEvent, KeyboardEvent, Component} from 'react';

export interface Props {
    handleKeyDown: Function;
}

export interface State {
    keyword: string;
}


class Header extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

    }

    state: State = {
        keyword: ''
    };

    onChange(evt: ChangeEvent<HTMLInputElement>) {
        const val = evt.target.value;
        this.setState({
            keyword: val
        });
    }

    onKeyDown(evt: KeyboardEvent<HTMLInputElement>) {
        if (evt.key.toLowerCase() === 'enter') {
            this.props.handleKeyDown(evt, this.state.keyword);
            this.setState({
                keyword: ''
            });
        }
    }


    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input className="new-todo" placeholder="What needs to be done?"
                       value={this.state.keyword}
                       onChange={event => this.onChange(event)}
                       onKeyDown={event => this.onKeyDown(event)}/>
            </header>
        )
    }
}

export default Header;
