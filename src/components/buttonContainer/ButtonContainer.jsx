import React from 'react';
import Hierarchy from '../hierarchy/Hierarchy';
import './BCstyle.css';

const ButtonContainer = ({ slNo, name, cost }) => {
  return (

    <div className='button_container'>

      <div className='pagesHeading'>
        <span className='slNo'>{slNo}</span>
        <span className='name'>{name}</span>
      </div>

      <Hierarchy />

      <Hierarchy />

      <Hierarchy />

      <div className='slNo'>{cost}</div>

    </div>
  )
}

export default ButtonContainer