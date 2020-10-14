import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar} alt='avatar' />
      <div className='status'>
        <h4 className='name'>{props.name}</h4>
        <div
          className={props.online ? 'status-online' : 'status-offline'}
        ></div>
        {props.online ? 'online' : 'offline'}
      </div>
    </div>
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;
