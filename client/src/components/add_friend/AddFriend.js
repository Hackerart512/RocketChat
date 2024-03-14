import React from 'react'

const AddFriend = ({ onClick }) => {

    

    return (
        <>
            <div className='modal flex bg-[#413c3c73]' id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
                <div className="modal-dialog w-[500px]">
                    <div className="modal-content">
                        <div className="modal-header px-3">
                            <li className="flex">
                                <i className="fa-solid fa-users text-[--themeColor] text-[14px] mx-1   p-1 rounded-sm"></i>

                                <h5 className="modal-title fs-6" id="exampleModalLabel">Add Friends</h5>
                            </li>

                            <img onClick={onClick} class="w-[20px] cursor-pointer" src="./images/close-window-icon.png"/>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 flex items-start flex-col">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                                <div className="mb-3 flex items-start flex-col">
                                    <label for="exampleInputnickname" className="form-label">Nickname</label>
                                    <input type="text" className="form-control" id="" />
                                </div>
                              
                                <div className="mb-3 flex items-start flex-col">
                                    <label for="exampleFormPhoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="exampleFormPhoneNumber" />
                                </div>

                                <div className="mb-3 flex items-start flex-col ">
                                    <label for="exampleFormEmail" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="exampleFormEmail" />
                                </div>

                                
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={onClick} type="button" className="btn text-black bg- hover:bg- ">Cancel</button>
                            <button type="button" className="btn text-white bg-[var(--themeColor)]  hover:bg-[var(--themeColor)]">Add Participant</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddFriend
