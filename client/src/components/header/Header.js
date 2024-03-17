import React from 'react';
import "./header.css";


const Header = ({ person }) => {



    return (
        <>
            <div className="header-section border-[1px] shadow-sm p-3 m-3 flex justify-between  rounded-md">
                <div className='header-left flex items-center justify-center'>

                    {
                        person.images ?
                            <img src={"./images/" + person.images} alt="" className="w-[45px] rounded-full" /> :
                            <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                <h3 className="font-bold text-[var(--themeColor)] ">{person.name[0]}</h3>
                            </div>
                    }

                  
                    {/* <img src="./images/avatar-13.jpg" alt="" className="w-[45px] rounded-full" /> */}

                    <div className="chat-content mx-2">
                        <div className="  text-[15px] text-[--themeColor] font-bold">
                            {person.name}</div>
                        <p className="text-[12px] text-left">online</p>
                    </div>
                </div>
                <div className='header-right flex items-center justify-center'>
                    <ul className="flex items-center justify-center">
                        <li className='mx-1 bg-[#f4f4fa] rounded-full  py-[7px] px-[11px]'><i className=' text-[#c8c8d8] fa-solid fa-phone text-[14px]'></i></li>
                        <li className='mx-1 bg-[#f4f4fa] rounded-full  py-[7px] px-[11px]'><i className=' text-[#c8c8d8] fa-solid fa-phone text-[14px]'></i></li>
                        <li className='mx-1 bg-[#f4f4fa] rounded-full  py-[7px] px-[11px]'><i className=' text-[#c8c8d8] fa-solid fa-user text-[14px]'></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
