import React from 'react'
import './Navbar.css'
import logo from '../assets/logo1.webp'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import GroupIcon from '@mui/icons-material/Group'
import WorkIcon from '@mui/icons-material/Work'
import MessageIcon from '@mui/icons-material/Message'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Avatar } from '@mui/material'
import avatar from '../assets/avatar.jpg'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar__search">
                    <img src={logo} alt="" />
                    <div className="navbar__search-content">
                        <SearchIcon className="navbar__search-icon" />
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon className="navbar__search-icon" id="icon2" />
                </div>
                <div className="navbar__links">
                    <div className="navbar__home">
                        <HomeIcon className="navbar__icon" />
                        <span className="navbar__text">Home</span>
                    </div>
                    <div className="navbar__link">
                        <GroupIcon className="navbar__icon" />
                        <span className="navbar__text">My Network</span>
                    </div>
                    <div className="navbar__link">
                        <WorkIcon className="navbar__icon" />
                        <span className="navbar__text">Jobs</span>
                    </div>
                    <div className="navbar__link">
                        <MessageIcon className="navbar__icon" />
                        <span className="navbar__text">Messaging</span>
                    </div>
                    <div className="navbar__link">
                        <NotificationsIcon className="navbar__icon" />
                        <span className="navbar__text">Notifications</span>
                    </div>
                    <div className="navbar__avatar">
                        <Avatar src={avatar} id="navbar__avatar-icon" />
                        <span className="navbar__text">Me</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
