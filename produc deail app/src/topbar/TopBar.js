import React from 'react'
import classes from'./topBar.module.css'
import img from './images/amazon_.png';
const TopBar = () => {
  return (
    <div>
       <nav className={classes.Topbar}>
        <img src={img} alt="" />
       </nav>
    </div>
  )
}

export default TopBar
