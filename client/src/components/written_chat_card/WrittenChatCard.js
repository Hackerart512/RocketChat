import React from 'react'
import { useSocket } from "../../context/SocketProvider";

const WrittenChatCard = ({ message }) => {

    const { person, account } = useSocket();

    const formateTimerFunc = (date) => {
        const hours = new Date(date).getHours();
        const minutes = new Date(date).getMinutes();

        
        return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`
    }

    return (
        <>
            {
                person._id == message.senderId ?
                    <div className="flex items-start my-2  ">
                        <div className="profile-picture flex justify-between flex-col-reverse  ">
                            <div>
                                {/* <img src="./images/avatar-13.jpg" alt="" className="w-[38px] rounded-full" /> */}
                                {
                                    person.images ?
                                        <img src={"./images/" + person.images} alt="" className="w-[45px] rounded-full" /> :
                                        <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                            <h3 className="font-bold text-[var(--themeColor)] ">{person.name[0]}</h3>
                                        </div>
                                }
                            </div>
                            <div className=" w-[20px] h-[51px]">

                            </div>
                        </div>

                        <div className="messages">
                            <div className="mx-3 message bg-[#5a078b] text-white flex flex-col items-start p-3 px-4">
                                <p className='text-white' >{message.text}</p>
                                <span className='text-white'>{formateTimerFunc(message.createdAt)}</span>
                            </div>
                            <div className="mx-3 mt-1 text-left  text-[15px] text-[--themeColor] font-bold">
                                {person.name}</div>
                        </div>
                    </div>
                    : <div className="flex items-start  my-2 flex-row-reverse ">
                        <div className="profile-picture flex justify-between flex-col-reverse  ">
                            <div>
                                {
                                    person.images ?
                                        <img src={"./images/" + person.images} alt="" className="w-[45px] rounded-full" /> :
                                        <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                            <h3 className="font-bold text-[var(--themeColor)] ">{person.name[0]}</h3>
                                        </div>
                                }
                            </div>
                            <div className=" w-[20px] h-[51px]">

                            </div>
                        </div>

                        <div className="message">
                            <div className="mx-3 message2 bg-[#e7eefe]   flex flex-col items-start p-3 px-4">
                                <p >{message.text}</p>
                                <span className='text-'>{formateTimerFunc(message.createdAt)}</span>
                            </div>
                            <div className="mx-3 mt-1 text-left  text-[15px] text-[--themeColor] font-bold">
                                {person.name}</div>
                        </div>
                    </div>
            }

        </>
    )
}

export default WrittenChatCard
