import React from 'react';
import "./sidebar.css";
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { LibraryBooks } from '@material-ui/icons';
import PersonAddAltIcon from '@material-ui/icons/PowerSettingsNew';
import Settings from '@material-ui/icons/Settings';
import Public from '@material-ui/icons/Public';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { useSocket } from "../../context/SocketProvider";
// import { styled } from '@material-ui/core';
// import SwitchAccount from '@material-ui/icons/SwitchAccount';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import PublicIcon from '@mui/icons-material/Public';


// import UnarchiveIcon from '@mui/icons-material/Unarchive';

const SIdebar = () => {

    const { logout, setLogout, profile,  setMyLanguage } = useSocket();

    let navigate = useNavigate();

    const [toggleProfileClick, setToggleProfileClick] = useState(false);
    const [toggleLaguageClick, setToggleLaguageClick] = useState(false);

    const logoutUser = async () => {
        await localStorage.removeItem('token');
        setLogout(!logout)
        navigate("/login")
    }

    const toggleProfile = () => {
        setToggleProfileClick(!toggleProfileClick);
    }

    const onLanguageToggle = () => {
        setToggleLaguageClick(!toggleLaguageClick);
    }

    const [selectInput, setSelectInput] = useState('');

    // On change event for input language fields 
    const handleInputChange = (e) => {
        setSelectInput(e.target.value)
    }

    const updateLanguageDetails = async () => {
        const formData = new FormData();
        formData.append('language',  selectInput);

        const response = await fetch('http://localhost:5000/api/profile/updateprofile', {
            method: 'PUT',
            body: formData,
            headers: {
                'auth-token': localStorage.getItem('token'),
            }
        });
        const json = await response.json();
        // console.log(json);
    }

    useEffect(() => {
        // console.log(selectInput);
        setMyLanguage(selectInput)
        // Api for Add language in database  With profile by defalut set English laguage
        updateLanguageDetails()

    }, [selectInput]) // After change input in selectInput the run that fucntion.. 

    return (
        <>
            <div className="sidebar w-[100px]">
                <div className="logo mt-2 flex items-center justify-center flex-col">
                    <img className='' src="/images/logo.png"></img>

                    <div className="first-menu">
                        <ul className="">
                            <li className=" main-li cursor-pointer"><Link to="/"><ChatIcon className='sidebar-icons' /></Link></li>

                            <li className="text-[#570786]  main-li cursor-pointer">
                                <LibraryBooks />
                            </li>

                            <li className="text-[#570786]  main-li cursor-pointer">
                                <PersonAdd />
                            </li>

                            <li onClick={onLanguageToggle} className="text-[#570786]  main-li cursor-pointer relative">
                                <Public />

                                <div className={`${toggleLaguageClick ? 'block' : 'none'}  cursor-pointer profile-hover-sidebar shadow-sm left-[52px] top-[0px] absolute bg-white`}>


                                    <select id="selectInput" onChange={handleInputChange} value={selectInput}>
                                        <option value="en">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    English
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="gu">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Gujrati
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="fr">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Franch
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ru">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Russian
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="hi">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Hindi
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ja">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Japanese
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="mr">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Marathi
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ta">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Tamil
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="ur">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    Urdu
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>
                                        <option value="en">
                                            <div className='cursor-pointer flex items-center justify-between my-2'>
                                                <div>
                                                    English
                                                </div>
                                                <div>
                                                    <Public style={{ fontSize: '17px' }} />
                                                </div>
                                            </div>
                                        </option>


                                    </select>


                                </div>
                            </li>

                            <li className="text-[#570786]  main-li cursor-pointer">
                                <Link to="/profile">
                                    <Settings />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-menu">

                    <div className="second-menu mb-3">
                        <ul>

                            <li className="relative">

                                {!profile ?
                                    <img onClick={toggleProfile} className='rounded-full cursor-pointer' src="/images/avatar-13.jpg" alt="img..."></img>
                                    :
                                    <img onClick={toggleProfile} className='rounded-full cursor-pointer h-[45px] object-cover w-[45px]' src={"./images/" + profile.profilePic} alt="img..."></img>
                                }

                                {/* <img onClick={toggleProfile} className='rounded-full cursor-pointer' src="/images/avatar-13.jpg" alt="img..."></img> */}

                                <ul className={`${toggleProfileClick ? 'block' : 'none'}  cursor-pointer profile-hover-sidebar shadow-sm`}>
                                    <Link className='cursor-pointer flex items-center justify-between ' to="profile">
                                        <li className='cursor-pointer flex items-center justify-between my-2'>
                                            <div>
                                                Profile
                                            </div>
                                            <div>
                                                <Public className='' style={{ fontSize: '17px' }} />
                                            </div>
                                        </li>
                                    </Link>
                                    <li className='cursor-pointer flex  items-center justify-between my-2'>
                                        <div>
                                            Settings
                                        </div>
                                        <div>
                                            <Settings style={{ fontSize: '17px' }} />
                                        </div>
                                    </li>
                                    <li onClick={logoutUser} className='flex items-center justify-between my-2 cursor-pointer'>
                                        <div className='text-[red]'>
                                            Logout
                                        </div>
                                        <div>
                                            <PersonAddAltIcon style={{ fontSize: '17px', color: "red" }} />
                                        </div>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SIdebar
