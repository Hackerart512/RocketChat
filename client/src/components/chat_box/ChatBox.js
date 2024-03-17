import React from 'react'
import WrittenChatCard from '../written_chat_card/WrittenChatCard'

const ChatBox = () => {
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
        </>
    )
}

export default ChatBox
