import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Message extends Component {
  render() {
    return (
      <div>
        {this.props.texto}
      </div>
    );
  }
}

Message.propTypes = {
  texto: PropTypes.string.isRequired
};

export default Message;