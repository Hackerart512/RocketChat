import React from 'react';
import "./sidebar.css";

// import UnarchiveIcon from '@mui/icons-material/Unarchive';

const SIdebar = () => {
    return (
        <>
            <div className="sidebar w-[100px]">
                <div className="logo my-5">
                    <img src="./images/logo.png"></img>
                </div>
                <div className="sidebar-menu">
                    <div className="first-menu">
                        <ul className="">
                            <li className="text-[#570786] main-li"><i class="fa-brands fa-rocketchat"></i></li>
                            <li className="text-[#570786]  main-li"><i class="fa-solid fa-users"></i></li>
                            <li className="text-[#570786]  main-li"><i class="fa-solid fa-users"></i></li>
                         
                             
                            <li className="text-[#570786]  main-li"><i class="fa-solid fa-signal"></i></li>
                            <li className="text-[#570786]  main-li"><i class="fa-solid fa-phone"></i></li>
                            <li className="text-[#570786]  main-li"><i class="fa-solid fa-gear"></i></li>
                        </ul>
                    </div>
                    <div className="second-menu my-5">
                        <img className='rounded-full' src="./images/avatar-13.jpg" alt="img..."></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SIdebar
