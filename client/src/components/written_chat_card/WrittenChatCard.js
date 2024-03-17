import React from 'react'

const WrittenChatCard = (props) => {
    return (
        <>
            {
                props.sender ?
                    <div className="flex items-start my-2  ">
                        <div className="profile-picture flex justify-between flex-col-reverse  ">
                            <div>
                                <img src="./images/avatar-13.jpg" alt="" className="w-[38px] rounded-full" />
                            </div>
                            <div className=" w-[20px] h-[51px]">

                            </div>
                        </div>

                        <div className="messages">
                            <div className="mx-3 message bg-[#5a078b] text-white flex flex-col items-start p-3 px-4">
                                <p  className='text-white' >{props.message}</p>
                                <span className='text-white'>{props.time}</span>
                            </div>
                            <div className="mx-3 mt-1 text-left  text-[15px] text-[--themeColor] font-bold">
                                {props.name}</div>
                        </div>
                    </div>
                    : <div className="flex items-start  my-2 flex-row-reverse ">
                        <div className="profile-picture flex justify-between flex-col-reverse  ">
                            <div>
                                <img src="./images/avatar-7.jpg" alt="" className="w-[38px] rounded-full" />
                            </div>
                            <div className=" w-[20px] h-[51px]">

                            </div>
                        </div>

                        <div className="messages">
                            <div className="mx-3 message bg-[#e7eefe]   flex flex-col items-start p-3 px-4">
                                <p >{props.message}</p>
                                <span className='text-'>10:00</span>
                            </div>
                            <div className="mx-3 mt-1 text-left  text-[15px] text-[--themeColor] font-bold">
                                {props.name}</div>
                        </div>
                    </div>
            }

        </>
    )
}

export default WrittenChatCard
