import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import {ImPlay3 } from  "react-icons/im"

import './principal.css'

const Principal = () => {
  return (
    <div className="netflix__principal">
      <div className="netflix__principal-bg">
        <img src="https://images.hdqwalls.com/download/captain-america-civil-war-movie-poster-1920x1080.jpg" alt="" />
      </div>
      <div className="netflix__principal-sinopse">
        <h1>Captain America</h1>
        <div className="netflix__principal-sinopse_more">
          <div className="date">2011</div>
          <div className="duration">2 Hours</div>
          <div className="hd">HD</div>
          <div className="audio">5.1</div>
        </div>
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur culpa velit exercitationem iusto voluptatibus, nemo laboriosam temporibus molestias ea maxime officiis cumque necessitatibus vitae dolores!</h2>
        <div className="buttons">
          <button className="play">
            <ImPlay3 size={25}/>
            <h1>Play</h1>
          </button>
          <button className="add">
            <AiOutlinePlus size={25}/>
            <h1>My List</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Principal