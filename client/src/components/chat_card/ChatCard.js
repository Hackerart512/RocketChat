import React from 'react'

const ChatCard = (props) => {
    return (
        <>

            {/* #1 */}
            <div className="chat-card flex items-center bg-white p-3 my-2 justify-between">
                <div className="chat-card-left flex items-center rounded-md">
                    <div className="chat-profile relative">
                   
                        {
                            props.images?
                            <img src={"./images/" + props.images} alt="" className="w-[45px] rounded-full" /> :
                                <div className="w-[45px] h-[45px] bg-[#e8dbff] rounded-full flex items-center justify-center">
                                    <h3 className="font-bold text-[var(--themeColor)]">{props.name[0]}</h3>
                                </div>
                        }

                        {
                            props.online == true?
                            <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#7ae27a] border-[2px] border-white rounded-full"></span>:  <span className="absolute top-[33px] right-[3px] w-[9px] h-[9px] bg-[#ffef3e] border-[2px] border-white rounded-full"></span>
                        }


                    </div>

                    <div className="chat-content mx-2">
                        <div className="  text-[15px] text-[--themeColor] font-bold">
                            {props.name}</div>
                        <p className="text-[12px]">{props.msg}</p>
                    </div>
                </div>
                <div className="chat-card-right">
                    <p className='text-[12px] font-semibold font-sans text-[gray]'>05 min</p>
                    <span className="rounded-full bg-blue-700 text-white fle items-center justify-center  text-[9px] py-[4px] px-[5px] w-[10px] h-[10px] ">11</span>
                </div>
            </div>
        </>
    )
}

export default ChatCard
