import React, {useState} from 'react'
import './navbar.css'

import { FaSearch, FaHeart, FaBell } from "react-icons/fa";
import { AiOutlineRight, AiOutlineMenu, AiOutlineRocket } from "react-icons/ai";
import { RiArrowDropDownFill, RiSettings5Fill, RiShutDownLine } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";


const Navbar = () => {

  return (
    <div className="netflix__navbar">
      <div className="navbar">
        <div className="netflix__navbar-logo">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        </div>
        <div className="netflix__navbar-links">
          <div className="netflix__navbar-links_categories">
            <p><a href="#home">TV Shows</a></p>
            <p><a href="#home">Movies</a></p>
            <p><a href="#home">Recently Added</a></p>
            <p><a href="#home">My list</a></p>
          </div>
          <div className="netflix__navbar-right">
            <div className="netflix__navbar-links_icons">
              <FaSearch size={18} className='hover'/>
              <div className="netflix__navbar-links_icons-mylist ">
              <ListItem >
                <ListMenu/>
              </ListItem>
              </div>
              <FaBell size={18} className='hover'/>
            </div>
            <div className="netflix__navbar-links_account">
              <NavItem>
                <DropdownMenu/>
              </NavItem>
            </div>
            
          </div>
        </div>
        <BurguerMenuItem>
            <BurguerMenu/>
          </BurguerMenuItem>
      </div>
    </div>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="account-menu " onClick={() => setOpen(!open)} >
      <div className="account-image -hover">
        <img src="https://i.imgflip.com/4uhis6.jpg" alt="" />
      </div>
      <div className="account-name -hover">
        <h1>Gustavo H.</h1>
      </div>
      <RiArrowDropDownFill size={30} className="-hover"/>
      {open && props.children}
    </div>

    
  )
}

function DropdownMenu() {
  
  function DropdownItem(props) {
    return (
      <div className="menu_item">
        <span className='icon-button'>{props.leftIcon}</span>

        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </div>
    )
  }

  return (
    <div className='dropdown slide-bottom-2'>
      <DropdownItem >
        <RiSettings5Fill size={24} className='icon-button'/>
        <h1>My Profile</h1>
      </DropdownItem>
      <DropdownItem>
        <RiShutDownLine size={24} className='icon-button'/>
        <h1>Log Out</h1>
      </DropdownItem>
      
    </div>
  )
}



function ListItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="list-menu list-hover" onClick={() => setOpen(!open)} >
      <FaHeart size={18} className="-hover"/> 
      <h1 className="-hover"> My List</h1>
      {open && props.children}
    </div>

    
  )
}

function ListMenu() {
  
  function ListmenuItem(props) {
    return (
      <div className="menu_item">
        <span className='icon-button'>{props.leftIcon}</span>

        {props.children}

        <span className='icon-right'>{props.rightIcon}</span>
      </div>
    )
  }

  return (
    <div className='list slide-bottom'>
      <ListmenuItem>
        <h3>You Don't Have Any Here Right Now</h3>
      </ListmenuItem>
        
    </div>
  )
}



function BurguerMenuItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="Burguer-menu" onClick={() => setOpen(!open)} >
      <AiOutlineMenu size={28} className='menu-burguer'/>
      {open && props.children}
    </div>

    
  )
}

function BurguerMenu() {
  
  function AllMenuItem(props) {
    return (
      <div className="menu_item">
        <span className='icon-button'>{props.leftIcon}</span>
  
        {props.children}
  
        <span className='icon-right'>{props.rightIcon}</span>
      </div>
    )
  }
  
  return (
    <div className='burguer'>
      <AllMenuItem >
        <CgScreen size={24} className='icon-button'/>
        <h1>Tv Shows</h1>
        <AiOutlineRight size={24} className='icon-right'/> 
      </AllMenuItem>

      <AllMenuItem >
        <AiOutlineRocket size={24} className='icon-button'/>
        <h1>Movies</h1>
        <AiOutlineRight size={24} className='icon-right'/> 
      </AllMenuItem>

      <AllMenuItem >
        <AiOutlineRocket size={24} className='icon-button'/>
        <h1>Recently Add</h1>
        <AiOutlineRight size={24} className='icon-right'/> 
      </AllMenuItem>

      <AllMenuItem >
        <AiOutlineRocket size={24} className='icon-button'/>
        <h1>My list</h1>
        <AiOutlineRight size={24} className='icon-right'/> 
      </AllMenuItem>

      <AllMenuItem >
        <AiOutlineRocket size={24} className='icon-button'/>
        <h1>Notifications</h1>
        <AiOutlineRight size={24} className='icon-right'/> 
      </AllMenuItem>

      <AllMenuItem >
        <AiOutlineRocket size={24} className='icon-button'/>
        <h1>Settings</h1>
        <AiOutlineRight size={24} className='icon-right'/> 
      </AllMenuItem>
        
    </div>
  )
}
  

export default Navbar