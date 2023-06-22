import React from 'react'
import './RightSide.css'
import Footer from '../Footer/Footer'
import InfoIcon from '@mui/icons-material/Info'
import { Avatar } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import logo1 from '../assets/toggLogo.jpg'
import logo2 from '../assets/martiLogo.jpg'
import logo3 from '../assets/fccLogo.jpg'

const RightSide = () => {
    return (
        <>
            <div className="rightSide">
                <div className="rightSide__component">
                    <div className="rightSide__addToFeed">
                        <p style={{ fontSize: '1.2rem', fontWeight: 'bolder' }}>Add to your feed</p>
                        <InfoIcon style={{ color: 'grey' }} />
                    </div>
                    <div className="rightSide__contents">
                        <div className="rightSide__content">
                            <Avatar src={logo1} />
                            <div className="rightSide__content-texts">
                                <span>Togg</span>
                                <div className="rightSide__content-rowText">
                                    <p>Company</p>
                                    <p>|</p>
                                    <p>E-Car</p>
                                </div>
                                <button className="rightSide__content-button">
                                    <AddIcon />
                                    Follow
                                </button>
                            </div>
                        </div>
                        <div className="rightSide__content">
                            <Avatar src={logo2} />
                            <div className="rightSide__content-texts">
                                <span>Marti</span>
                                <div className="rightSide__content-rowText">
                                    <p>Company</p>
                                    <p>|</p>
                                    <p>E-Scooter</p>
                                </div>
                                <button className="rightSide__content-button">
                                    <AddIcon />
                                    Follow
                                </button>
                            </div>
                        </div>
                        <div className="rightSide__content">
                            <Avatar src={logo3} />
                            <div className="rightSide__content-texts">
                                <span>freeCodeCamp</span>
                                <div className="rightSide__content-rowText">
                                    <p>Company</p>
                                    <p>|</p>
                                    <p>E-Learning</p>
                                </div>
                                <button className="rightSide__content-button">
                                    <AddIcon />
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rightSide__recommendations">
                        <span style={{ color: 'grey', marginRight: '15px' }}>View all recommendations</span>
                        <ArrowForwardIcon />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RightSide
