import React, { useEffect, useState } from 'react'
import WrittenChatCard from '../written_chat_card/WrittenChatCard'
import { useSocket } from "../../context/SocketProvider";
import { newMessage, getMessage } from "../../api/Api"


const ChatBox = ({ person, conversation }) => {

    const [message, setMessag] = useState('');
    const { account } = useSocket();

    const sendText = async () => {
        let MessagesObject = {
            senderId: account._id,
            receiverId: person._id,
            conversationId: conversation._id,
            type: 'text',
            text: message
        }

        await newMessage(MessagesObject);
        setMessag("")
    }

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            console.log(data);
        }
        
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id]);

    return (
        <>
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
                            <input value={message} onChange={(e) => setMessag(e.target.value)} className='mx-4' placeholder='Enter message...' type="text" />
                        </div>

                        <div className='right-side-sendbox'>
                            <button onClick={sendText} type='button' className=' send-button rounded-full bg-[#ee00ab] text-white   m-1'>
                                {`>`}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChatBox
