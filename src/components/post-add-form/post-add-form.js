import React, {Component} from 'react';
import style from './App.module.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({text: event.target.value}); 
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({text: ''});
    }
    
    render() {
        return (
            <form 
                className={style.bottomPanel}
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="new-post-label form-control"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                    >Добавить</button>
            </form>
        )
    }
}
