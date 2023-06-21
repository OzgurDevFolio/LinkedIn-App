import React from 'react'
import './Feed.css'
import { Avatar } from '@mui/material'
import avatar from '../assets/avatar.jpg'
import PhotoIcon from '@mui/icons-material/Photo'
import YouTubeIcon from '@mui/icons-material/YouTube'
import EventIcon from '@mui/icons-material/Event'
import ArticleIcon from '@mui/icons-material/Article'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Feed = () => {
    return (
        <>
            <div className="feed">
                <div className="feed__post">
                    <div className="feed__post-posting__section">
                        <Avatar src={avatar} id="feed__post-avatar" />
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
                    <hr id="for__line" />
                    <p>Sort by: </p>
                    <p style={{ fontWeight: 'bolder', marginLeft: '10px' }}> Top</p>
                    <ArrowDropDownIcon className="sorting__icon" style={{ fontWeight: 'bolder' }} />
                </div>
                <div className="posts"></div>
            </div>
        </>
    )
}

export default Feed
