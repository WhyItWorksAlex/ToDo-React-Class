import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    addTerm = (e) => {
        const term = e.currentTarget.value
        this.setState({term})
        this.props.setTerm(term)
    }

    render() {
        return (
            <input type="text"
                    className="form-control search-input"
                    placeholder="Найти сотрудника"
                    value={this.state.term}
                    onChange={this.addTerm}/>
        )
    }
}
export default SearchPanel;