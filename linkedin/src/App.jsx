import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LeftSide from './components/LeftSide/LeftSide'
import Feed from './components/Feed/Feed'
import RightSide from './components/RightSide/RightSide'
import MessageBox from './components/MessageBox/MessageBox'

function App() {
    return (
        <>
            <Navbar />
            <div className="app__content">
                <LeftSide />
                <Feed />
                <RightSide />
                <MessageBox />
            </div>
        </>
    )
}

export default App
