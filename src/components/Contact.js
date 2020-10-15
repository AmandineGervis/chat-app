import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      status: !state.status,
    }));
  }
  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt='avatar' />
        <div className='status'>
          <h4 className='name'>{this.props.name}</h4>
          <div>
            <div
              className={this.state.status ? 'status-online' : 'status-offline'}
            ></div>
            <div onClick={this.handleClick}>
              {this.state.status ? 'online' : 'offline'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
