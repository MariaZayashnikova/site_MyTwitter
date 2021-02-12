import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        let text = event.target.value;
        this.setState({text: text});
        this.props.textSearch(text);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Поиск по записям"
                onChange={this.onValueChange}
            />
        )
    }
}
