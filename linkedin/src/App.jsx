import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import LeftSide from './components/LeftSide/LeftSide'
import Feed from './components/Feed/Feed'
import RightSide from './components/RightSide/RightSide'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <Navbar />
            <div className="app__content">
                <LeftSide />
                <Feed />
                <RightSide />
                <Footer />
            </div>
        </>
    )
}

export default App
