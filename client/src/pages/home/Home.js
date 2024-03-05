import React from 'react';
import "./home.css";
import Sidebar from '../../components/sidebar/Sidebar';
 

const Home = () => {
    return (
        <>
            <div className="main-wrapper ">

                <Sidebar/>
                
                <div className="sidebar-group">
                    chat list
                </div>

                <div className="chat">
                    chat
                </div>
            </div>
        </>
    )
}

export default Home
