import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { text: '' };
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    render() {
        return (
            <div>
                <input
                    id="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <br />
                Bienvenid@ {this.state.text}
            </div>
        );
    }
}
Welcome.propTypes = {
    text: PropTypes.string.isRequired
};
export default Welcome;