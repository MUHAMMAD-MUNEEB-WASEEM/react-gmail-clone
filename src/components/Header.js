import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'



//IMG
import gmail from '../images/gmailLogo.png'
import { ArrowDropDown } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={gmail} alt=""/>
            </div>

            <div className='header__middle'>
                <SearchIcon />
                <input placeholder="search mail" type="text"/>
                <ArrowDropDown className="header__inputCarel"/>
            </div>

            <div className='header__right'>
                <IconButton>
                    <AppsIcon />
                </IconButton> 
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar/>             
            </div>

        </div>
    )
}

export default Header
