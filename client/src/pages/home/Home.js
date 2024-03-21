import React, { useEffect, useState } from 'react';
import "./home.css";
import Sidebar from '../../components/sidebar/Sidebar';
import ChatCard from '../../components/chat_card/ChatCard';
import Header from '../../components/header/Header';

import { useSocket } from "../../context/SocketProvider";
import AddFriend from '../../components/add_friend/AddFriend';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

import { getContactList } from '../../api/Api'
import ChatBox from '../../components/chat_box/ChatBox';
import { useNavigate } from 'react-router-dom';
import {getConversation} from "../../api/Api"

const Home = () => {

    let navigate = useNavigate();
    if(!localStorage.getItem('token'))  navigate('/signup')

    const { person ,account} = useSocket();

    const [modalActive, setModalActive] = useState(false);

    const [ContactList, setContactList] = useState([]);

    const [text, setText] = useState('');

    const [conversation, setConversation] = useState({})


    const modalActiveFunction = () => {
        return setModalActive(!modalActive);
    }


    useEffect(() => {
        const getContactListDetails = async () => {
            let data = await getContactList();
            // filter out by search 

            const filterContact = data.contactLists.filter(contact => contact.name.toLowerCase().
                includes(text.toLowerCase()))

            setContactList(filterContact);
            // console.log(data.contactLists);
        }
        getContactListDetails();
    }, [text])
    // call  if whenever change text state....


    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({senderId: account._id,receiverId: person._id})
            // console.log(data, person._id, account._id);
            setConversation(data);
        }
        getConversationDetails()
    }, [person._id])


    return (
        <>
            <div className="main-wrapper ">

                <Sidebar />

                <div id="slider-scroll" className="sidebar-group ml-[83px] p-3  w-[407px] bg-[#fafbff] overflow-y-scroll h-[100vh]">
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
                                <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Search Contacts" className="w-[100%]  placeholder:text-[12px] p-2  border-[#f3f3f3] border-[1px]  rounded-sm shadow-sm text-black focus:outline-none" />
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


                        {
                            ContactList.map((item) => {
                                return (
                                    // <ChatCard images="avatar-13.jpg" name={item.name} msg="It seems logical that the" online={true} />
                                    <ChatCard user={item} />
                                )
                            })
                        }

                       
                    </div>

                </div>

                <div className="chat w-[75vw] h-[82vh] overflow-y-scroll">

                    {
                        Object.keys(person).length ? <Header person={person} /> : null
                    }
                    {
                        Object.keys(person).length ? <ChatBox person={person}  conversation={conversation} /> : "hu"
                    }

                </div>
            </div>
        </>
    )
}

export default Home
