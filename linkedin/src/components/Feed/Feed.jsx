import { React } from 'react'
import './Feed.css'
import { Avatar } from '@mui/material'
import avatar from '../assets/avatar.jpg'
import PhotoIcon from '@mui/icons-material/Photo'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EventIcon from '@mui/icons-material/Event'
import ArticleIcon from '@mui/icons-material/Article'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import VideocamIcon from '@mui/icons-material/Videocam'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const Feed = () => {
    return (
        <>
            <div className="feed">
                <div className="feed__post">
                    <div className="feed__post-posting__section">
                        <Avatar src={avatar} className="feed__post-avatar" />
                        <input type="text" placeholder="Start a post" />
                    </div>
                    <div className="feed__post-links">
                        <div className="feed__post-link">
                            <PhotoIcon className="feed__post-link__icon" style={{ color: 'skyblue' }} />
                            <p className="feed__post-link__text">Photo</p>
                        </div>
                        <div className="feed__post-link">
                            <YouTubeIcon className="feed__post-link__icon" style={{ color: '#42b883' }} />
                            <p className="feed__post-link__text">Video</p>
                        </div>
                        <div className="feed__post-link">
                            <EventIcon className="feed__post-link__icon" style={{ color: '#83580b' }} />
                            <p className="feed__post-link__text">Event</p>
                        </div>
                        <div className="feed__post-link">
                            <ArticleIcon className="feed__post-link__icon" style={{ color: '#f96d00' }} />
                            <p className="feed__post-link__text">Write Article</p>
                        </div>
                    </div>
                </div>
                <div className="sorting">
                    <hr className="for__line" />
                    <p>Sort by: </p>
                    <p style={{ fontWeight: 'bolder', marginLeft: '10px' }}> Top</p>
                    <ArrowDropDownIcon className="sorting__icon" style={{ fontWeight: 'bolder' }} />
                </div>
                <div className="feed__post-posting__section-onclick">
                    <div className="post__onclick-section__top">
                        <div className="post__onclick-section__informs">
                            <Avatar src={avatar} id="feed__postBox-avatar" />
                            <div className="post__informs-main">
                                <div className="post__informs-main__name">
                                    <span>Özgür Demirbacak</span>
                                    <ArrowDropDownIcon />
                                </div>
                                <span style={{ fontWeight: '100', fontSize: '15px' }}>Post to Anyone</span>
                            </div>
                        </div>
                        <CloseIcon id="closeIcon" />
                    </div>
                    <div className="post__onclick-section__posting">
                        <input className="messageBox" placeholder="What do you want to talk about?"></input>
                        <SentimentSatisfiedAltIcon id="emojiIcon" />
                        <div className="messageBox__icons">
                            <PhotoIcon className="messageBox__icon" />
                            <VideocamIcon className="messageBox__icon" />
                            <EventIcon className="messageBox__icon" />
                            <MoreHorizIcon className="messageBox__icon" />
                        </div>
                        <hr id="for__line1" />
                        <div className="posting__section">
                            <AccessTimeIcon id="timeIcon" />
                            <button className="postButton">Post</button>
                        </div>
                    </div>
                </div>
                <div className="posts"></div>
            </div>
        </>
    )
}

export default Feed
