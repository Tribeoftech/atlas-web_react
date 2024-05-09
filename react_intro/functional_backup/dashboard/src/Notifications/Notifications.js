import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  }

  return <>
    <div className='Notifications'>
      <img src={closeIcon} alt='close icon'
        style={{ height: '15px', position: 'absolute', top: 10, right: 10 }}
        aria-label='Close'
        onClick={handleButtonClick}
      ></img>

      <p>Here is the list of notifications</p>
      <ul>
        <li data='default'>New course available</li>
        <li data='urgent'>New resume available</li>
        <li data='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  </>
};
