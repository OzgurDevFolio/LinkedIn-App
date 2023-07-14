import React from 'react'
import './LeftSide.css'
import avatar from '../assets/avatar.jpg'
import bgPhoto from '../assets/bgPhoto.jpeg'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import GroupsIcon from '@mui/icons-material/Groups'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddIcon from '@mui/icons-material/Add'

const LeftSide = () => {
    return (
        <>
            <div className="leftside">
                <div className="leftside__profile">
                    <div className="leftside__profile-status">
                        <img src={bgPhoto} alt="Background" />
                        <div className="leftside__profile-status__avatar">
                            <img src={avatar} id="avatar__photo" />
                        </div>
                        <span style={{ fontSize: '1.4rem', fontWeight: 'bolder', color: 'black' }}>Özgür Demirbacak</span>
                        <p style={{ fontSize: '30px' }}>--</p>
                    </div>
                    <div className="leftside__profile-status__stats">
                        <div className="sidebar__stat">
                            <p className="connections__text">Connections</p>
                            <p className="connections__numbers">20</p>
                        </div>
                        <div className="sidebar__stat">
                            <p className="connections__text">Grow Your Network</p>
                        </div>
                        <div className="sidebar__stat">
                            <p className="connections__text">Invitations</p>
                            <p className="connections__numbers">1</p>
                        </div>
                    </div>
                    <div className="leftside__profile-status__myitems">
                        <BookmarkIcon className="myitems__icon" style={{ marginLeft: '20px' }} />
                        <span style={{ color: 'black' }}>My Items</span>
                    </div>
                </div>
                {/** Sticky */}
                <div className="leftside__content">
                    <div className="leftside__content-recent">
                        <h3 style={{ fontWeight: 'lighter', color: 'black', margin: '20px 0 0 10px', color: '#0a66c2' }}>Recent</h3>
                        <ul className="sidebar__elements">
                            <li className="leftside__content-recentItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">Frontend-Developers</h4>
                            </li>
                            <li className="leftside__content-recentItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">Javascript</h4>
                            </li>
                            <li className="leftside__content-recentItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">React Learning</h4>
                            </li>
                            <li className="leftside__content-recentItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">UI/UX Designers</h4>
                            </li>
                        </ul>
                    </div>
                    <div className="leftside__content-groups">
                        <h3 style={{ fontWeight: 'lighter', color: 'black', margin: '20px 0 0 10px', color: '#0a66c2' }}>Groups</h3>
                        <ul>
                            <li className="leftside__content-groupsItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">Frontend-Developers</h4>
                            </li>
                            <li className="leftside__content-groupsItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">React Learning</h4>
                            </li>
                            <li className="leftside__content-groupsItem">
                                <GroupsIcon className="leftside__content-icon" />
                                <h4 className="leftside__content-text">UI/UX Designers</h4>
                            </li>
                            <li className="leftside__content-groupsItem">
                                <h3 className="leftside__content-text" id="showmore__bottom">
                                    Show More
                                </h3>
                                <KeyboardArrowDownIcon className="leftside__content-icon" />
                            </li>
                        </ul>
                    </div>
                    <div className="leftside__content-groupsItem" id="event__bottom">
                        <h3 style={{ fontWeight: 'lighter', color: 'black', margin: '20px 0px', color: '#0a66c2' }}>Events</h3>
                        <AddIcon className="leftside__content-icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSide
