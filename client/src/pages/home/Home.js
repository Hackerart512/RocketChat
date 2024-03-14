import React, { useState } from 'react';
import "./home.css";
import Sidebar from '../../components/sidebar/Sidebar';
import ChatCard from '../../components/chat_card/ChatCard';
import Header from '../../components/header/Header';
import WrittenChatCard from '../../components/written_chat_card/WrittenChatCard';
import { useSocket } from "../../context/SocketProvider";
import AddFriend from '../../components/add_friend/AddFriend';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Home = () => {

    const socket = useSocket();

    const Contact = socket.contactList.contactLists;
    console.log(Contact);

    const [modalActive, setModalActive] = useState(false);

    const modalActiveFunction = () => {
        return setModalActive(!modalActive);
    }

    return (
        <>
            <div className="main-wrapper ">

                <Sidebar />

                <div className="sidebar-group ml-[83px] p-3  w-[407px] bg-[#fafbff] overflow-y-scroll h-[100vh]">
                    {/* top header components */}
                    <div className="flex justify-between items-center px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">chats </div>
                        <div className="">
                            <ul className="flex">
                                <li className=""><i className="fa-solid fa-users text-[--themeColor] text-[12px] mx-1 border-[#f3f3f3] border-[1px] p-1 rounded-sm"></i></li>

                                <li onClick={modalActiveFunction} className=""><i className="fa-solid fa-plus text-[--themeColor] mx-1 text-[12px] border-[#f3f3f3] border-[1px] p-1 rounded-sm cursor-pointer" ></i></li>

                                {modalActive && <AddFriend onClick={modalActiveFunction} />}
                            </ul>
                        </div>
                    </div>
                    {/* top header components */}

                    <div className="inputFormFeilds px-2">
                        <form action="" className="">
                            <div className="my-2">
                                <label htmlFor="" className=""></label>
                                <input type="text" placeholder="Search Contacts" className="w-[100%] text-white placeholder:text-[12px] p-2  border-[#f3f3f3] border-[1px]  rounded-sm shadow-sm" />
                            </div>
                        </form>
                    </div>

                    {/* Online status */}

                    <div className="online-status flex px-2">
                        {/* #1 */}
                        <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                            <img src="./images/avatar-8.jpg" alt="" className="w-[53px] rounded-md" />
                            <div className="status-name mt-2">
                                <p className="text-[12px] font-bold text-[#585858]">helen</p>
                            </div>
                        </div>
                        {/* #1 */}
                        <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                            <img src="./images/avatar-7.jpg" alt="" className="w-[53px] rounded-md" />
                            <div className="status-name mt-2">
                                <p className="text-[12px] font-bold text-[#585858]">Prince</p>
                            </div>
                        </div>
                        {/* #1 */}
                        <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                            <img src="./images/avatar-13.jpg" alt="" className="w-[53px] rounded-md" />
                            <div className="status-name mt-2">
                                <p className="text-[12px] font-bold text-[#585858]">Hathan</p>
                            </div>
                        </div>
                        {/* #1 */}
                        <div className="status-card flex items-center justify-center bg-white p-2 flex-col w-[70px] mx-1">
                            <img src="./images/avatar-3.jpg" alt="" className="w-[53px] rounded-md" />
                            <div className="status-name mt-2">
                                <p className="text-[12px] font-bold text-[#585858]">Maria</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center my-3 px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">RECENT CHATS</div>
                        <div className="">
                            <ul className="flex">


                            </ul>
                        </div>
                    </div>

                    {/* chats container */}
                    <div className="chat-container px-2">

                         

                        <ChatCard images="avatar-13.jpg" name="Regina Dickerson" msg="It seems logical that the" online={true} />

                        <ChatCard images="avatar-13.jpg" name="Regina Dickerson" msg="It seems logical that the" online={true} />



                        {/* <ChatCard images="avatar-8.jpg" name="Forest Kroch" msg="It seems logical that the" />

                        <ChatCard images="avatar-8.jpg" name="Regina Dickerson" msg="It seems logical that the" online={true} />

                        <ChatCard images="" name="Townsend Seary" msg="It seems logical that the" />

                        <ChatCard images="avatar-13.jpg" name="Regina Dickerson" msg="It seems logical that the" />

                        <ChatCard images="avatar-8.jpg" name="Regina Dickerson" msg="It seems logical that the" />

                        <ChatCard images="avatar-13.jpg" name="Regina Dickerson" msg="It seems logical that the" /> */}


                    </div>



                </div>

                <div className="chat w-[75vw] overflow-y-scroll">
                    <Header />
                    <div className="chatting-container p-4 h-[76vh] ">
                        <WrittenChatCard sender={true} name="nitin" message="Vo hi kr rha" />
                        <WrittenChatCard name="pavan" message="ss bhej group me kitna kiya" />

                        <WrittenChatCard sender={true} name="nitin" message="Krta hu" />
                        <WrittenChatCard name="pavan" message="Kab krega bhai" />
                        <WrittenChatCard name="pavan" message="Good" />
                        <WrittenChatCard name="pavan" message="yesa bna skta he tu" />

                        <WrittenChatCard sender={true} name="nitin" message="hmm" />

                    </div>

                    <div className="w-[68vw] chat-send-container p-4 position-fixed bottom-[0px] bg-white">

                        <div className="chat-send-innerbox shadow-sm border-[1px]  h-[50px] rounded-[88px] flex items-center justify-center">

                            <form className="flex items-center justify-between w-[100%]">
                                <div className='left-side-sendbox'>

                                    <i className='fa-solid fa-smile'></i>
                                    <i className='text-[20px] fa-solid fa-paperclip'></i>
                                    <input className='mx-4' placeholder='Enter message...' type="text" />
                                </div>

                                <div className='right-side-sendbox'>
                                    <button className=' send-button rounded-full bg-[#ee00ab] text-white   m-1'>
                                        {`>`}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
