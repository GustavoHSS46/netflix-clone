import React from 'react'
import './cards.css'

import { BiPlay } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

const Cards = ({img, title}) => {
  return (
    <div className="card__roll">
      <img src={img} alt="" />
      <div className="card__roll-lower">
        <BiPlay size={26}/>
        <h1>{title}</h1>
        <AiOutlinePlus size={22}/>
      </div>
    </div>
  )
}

export default Cards