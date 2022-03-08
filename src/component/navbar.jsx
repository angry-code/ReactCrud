import React from 'react'
import Appbar  from '@material-ui/core/AppBar'
import Toolbar  from '@material-ui/core/Toolbar'
import { NavLink } from 'react-router-dom';
import {makeStyles}  from '@material-ui/core'

const style =makeStyles({
        tabs:{
            color:'#FFFFFF',
            textDecoration :'none',
            marginRight :20
        }
    })

const navbar = ()=>{
    const classes = style();
    return(
        <Appbar position='static'>
        <Toolbar>
          <NavLink className={classes.tabs} to='/'>HEY ADMIN</NavLink>
          <NavLink className={classes.tabs} to='add'>ADD USER</NavLink>
          <NavLink className={classes.tabs} to='all'>USER LIST</NavLink>
        </Toolbar>
      </Appbar>
    )
}
export default navbar