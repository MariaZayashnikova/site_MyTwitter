import React, {Component} from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.css';

export default class StatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравились'}
        ]
    }

    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'info' : 'btn-outline-secondary';

            return (
                <Button
                     key={name} 
                     color={clazz}
                     onClick={() => this.props.updateFiler(name)}
                     >{label}</Button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
