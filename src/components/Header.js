import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { ArrowDropDown } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

//IMG
import gmail from '../images/gmailLogo.png'
import { auth } from '../firebase';

function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const signOut = () => {
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    };

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
                <Avatar onClick={signOut} src={user?.photoUrl}/>             
            </div>

        </div>
    )
}

export default Header
