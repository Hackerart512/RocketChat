import React from 'react'

const UserProfile = ({ onClick, profileActive, person }) => {
    return (
        <>
            <div className={`${profileActive ? 'w-[64vh]' : 'none'} bg-[#fafbff] px-4 py-2 overflow-y-scroll h-[100vh] z-[1] profile-container`}>

                <div className='border-[1px] border-[#cecccc]  '>
                    <div className="modal-header px-3">
                        <li className="flex">
                            <h5 className="modal-title fs-6" id="exampleModalLabel">Profile</h5>
                        </li>

                        <img onClick={onClick} className="w-[20px] cursor-pointer" src="./images/close-window-icon.png" />
                    </div>
                    <div className="user-mid bg-[#fafbff] flex items-center justify-center flex-col py-3">
                        <div className="user-profile rounded-full bg-[#e8e2f5] p-2 w-[106px] ">
                            {/* <img className="rounded-full " src="./images/avatar-7.jpg" alt=""></img> */}

                            {
                                person.profile ?
                                    <img src={"./images/" + person?.profile?.profilePic} alt="" className="  rounded-full object-cover h-[90px] w-[102px]" /> :
                                    <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                        <h3 className="font-bold text-[var(--themeColor)] ">{person?.name[0].toUpperCase()}</h3>
                                    </div>
                            }

                        </div>
                        {!(person || person?.name) ?
                            <h5 className="mt-3 profile-name mb-1">Unknown</h5>
                            :
                            <h5 className="mt-3 profile-name mb-1">{person?.name}</h5>
                        }

                    </div>
                    <div className="user-footer">

                        {!(person || person?.profile?.bio) ?
                            <p className="user-bio text-left px-3 pb-3 text-[#949393]">No Bio </p>
                            :
                            <p className="user-bio text-left px-3 pb-3 text-[#949393]">{person?.profile?.bio} </p>
                        }


                        <div className="text-center mb-4">
                            <p className="mb-0 text-[black] font-semibold">Phone</p>
                            <span className=" text-[#949393]">+91 878787878</span>
                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0 text-[black] font-semibold">Nickname</p>
                            <span className="text-[#949393]">Piyush</span>
                        </div>
                        <div className="text-center mb-4">
                            <p className="mb-0 text-[black] font-semibold">Email</p>
                            <span className="text-[#949393]">Piyush</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
