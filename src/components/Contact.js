import React from 'react';
import './Contact.css';

const name = 'Bobby Payne';
const avatar = 'https://randomuser.me/api/portraits/men/53.jpg';
const status = true;

function Contact() {
  return (
    <div className='Contact'>
      <img className='avatar' src={avatar} />
      <div className='status'>
        <h4 className='name'>{name}</h4>
        <div className='status-online'></div>
        <p className='status-text'>online</p>
      </div>
    </div>
  );
}

export default Contact;
