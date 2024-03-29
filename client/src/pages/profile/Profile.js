import React from 'react'
import SIdebar from '../../components/sidebar/Sidebar';
import "./profile.css"

import Facebook from '@material-ui/icons/Facebook';


import { useSocket } from "../../context/SocketProvider";
import { Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons';

const Profile = () => {

    const {account } = useSocket();

    // console.log(account)
    return (
        <>
            <div className="main-wrapper ">

                <SIdebar />

                <div id="slider-scroll" className="sidebar-group ml-[83px] p-3  w-[407px] bg-[#fafbff] overflow-y-scroll h-[100vh]">
                    {/* top header components */}
                    <div className="flex justify-between items-center px-2">
                        <div className="uppercase  text-[12px] text-[--themeColor] font-extrabold">proifle </div>
                        <div className="">

                        </div>
                    </div>
                    {/* top header components */}

                    <div className="inputFormFeilds px-2">
                        <form action="" className="">
                            <div className="my-2">
                                <label htmlFor="" className=""></label>
                                <input type="text" placeholder="Search Contacts" className="w-[100%]  placeholder:text-[12px] p-2  border-[#f3f3f3] border-[1px]  rounded-sm shadow-sm text-black focus:outline-none" />
                            </div>
                        </form>
                    </div>


                    <div class="profile-card mt-3">
                        <div class="profile-cover text-center mb-3">
                            <label class="profile-cover-avatar" for="avatar_upload">
                                <img class="avatar-img" src="/images/profile.png" alt="Profile Image" />
                                <input type="file" id="avatar_upload" />
                                <span class="avatar-edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-edit-2 avatar-uploader-icon shadow-soft">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                        </path>
                                    </svg>
                                </span>
                            </label>
                            <h5 class="mt-3 profile-name mb-1">Rocket chat</h5>
                            <p class="profile-email mb-1">{account.email}</p>
                            <h5 class="profile-country mb-0">IND</h5>
                        </div>
                        <div class="profile-info">
                            <div class="text-center mb-4">
                                <p class="info-title mb-0">Phone</p>
                                <span class="info-text">+917676767676</span>
                            </div>
                            <div class="text-center mb-4">
                                <p class="info-title mb-0">Nick Name</p>
                                <span class="info-text">{account.name}</span>
                            </div>
                            <div class="text-center mb-4">
                                <p class="info-title mb-0">Email</p>
                                <span class="info-text">{account.email}</span>
                            </div>
                            <ul class="social-nav p-0 mb-0 text-center">
                                <li>
                                    <a href="#" className='text-[var(--themeColor)]'><Facebook/></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[var(--themeColor)]'><Instagram/></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[var(--themeColor)]'><LinkedIn className='text-[var(--themeColor)]'/></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[var(--themeColor)]'><Twitter/></a>
                                </li>
                                <li>
                                    <a href="#" className='text-[var(--themeColor)]'><YouTube/></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="settings-card mt-3">
                        <div class="settings-control">
                            <ul>
                                <li class="d-flex align-items-center">
                                    <div>
                                        <span>Desktop Notification</span>
                                    </div>
                                    <label class="switch ms-auto">
                                        <input type="checkbox" checked="" />
                                        <span class="slider round"></span>
                                    </label>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div>
                                        <span>Sound Notification</span>
                                    </div>
                                    <label class="switch ms-auto">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div>
                                        <span>Profile privacy</span>
                                    </div>
                                    <label class="switch ms-auto">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div>
                                        <span>Two-step security verification</span>
                                    </div>
                                    <label class="switch ms-auto">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="settings-footer">
                            <ul class="p-0 mb-0">
                                <li>
                                    <a href="#"><i class="fa fa-chevron-right"></i> Need Help? Let's
                                        chat</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-chevron-right"></i> English (united
                                        States)</a>
                                </li>
                            </ul>

                            {/* <details>
                                <summary className="text-[green]">Needs</summary>
                                jhhhhhhhhhhhhhhhhhhh
                            </details> */}

                        </div>
                    </div>

                </div>

                <div className="chat w-[75vw]   overflow-y-scroll">
                    <div class="chat settings-main p-3" id="middle" >
                        <div class="slimScrollDiv" style={{ "position": "relative", overflow: "hidden", width: "100%", height: "641px" }}>
                            <div class="slimscroll" style={{ width: "100%", height: "650px" }}>
                                <div class="page-header d-flex align-items-center">
                                    <div class="me-3 d-md-block d-lg-none">
                                        <a class="text-muted px-0 left_side" href="#">
                                            <i class="fas fa-arrow-left"></i>
                                        </a>
                                    </div>
                                    <div>
                                        <h5>SETTINGS</h5>
                                        <p>Last Update your profile: 29 Aug 2020</p>
                                    </div>
                                </div>

                                <div class="settings-tab my-4">
                                    <nav>
                                        <div class="nav nav-tabs" id="nav-tab">
                                            <a class="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                                href="#general">General Settings</a>
                                            <a class="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                                href="#notifications">Notification</a>
                                            <a class="nav-item nav-link" id="nav-profile-tab1" data-bs-toggle="tab"
                                                href="#history">Device History</a>
                                            <a class="nav-item nav-link" id="nav-profile-tab2" data-bs-toggle="tab"
                                                href="#security">Security</a>
                                        </div>
                                    </nav>
                                    <div class="tab-content settings-form">

                                        <div class="tab-pane fade show active" id="general">
                                            <div class="settings-header">
                                                <h5>Account Settings</h5>
                                                <p>Update your account details</p>
                                            </div>
                                            <div class="settings-control p-3">
                                                <div class="form-col form-body">
                                                    <form action="index.html">
                                                        <div class="row">
                                                            <div class="col-md-6 col-xl-4">
                                                                <div class="form-group">
                                                                    <label>First Name</label>
                                                                    <input
                                                                        class="form-control form-control-lg group_formcontrol"
                                                                        name="first-name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-xl-4">
                                                                <div class="form-group">
                                                                    <label>Last Name</label>
                                                                    <input
                                                                        class="form-control form-control-lg group_formcontrol"
                                                                        name="last-name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-xl-4">
                                                                <div class="form-group">
                                                                    <label>Phone Number</label>
                                                                    <input
                                                                        class="form-control form-control-lg group_formcontrol"
                                                                        name="phone-number" type="text" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-xl-4">
                                                                <div class="form-group">
                                                                    <label>Nick name <span class="">(Optional)</span></label>
                                                                    <input
                                                                        class="form-control form-control-lg group_formcontrol"
                                                                        name="nick-name" type="text" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-xl-4">
                                                                <div class="form-group">
                                                                    <label>Choose profile picture</label>
                                                                    <div
                                                                        class="custom-input-file form-control form-control-lg group_formcontrol">
                                                                        <input type="file" class="" />
                                                                        <span class="browse-btn">Browse File</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6 col-xl-4">
                                                                <div class="form-group">
                                                                    <label>Location</label>
                                                                    <input
                                                                        class="form-control form-control-lg group_formcontrol"
                                                                        name="location" type="text" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-12 col-xl-12">
                                                                <div class="form-group">
                                                                    <label>Bio</label>
                                                                    <textarea
                                                                        class="form-control form-control-lg group_formcontrol"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <hr></hr>
                                                <div class="social-settings">
                                                    <h4>Social Links</h4>
                                                    <div class="form-col form-body">
                                                        <form action="index.html">
                                                            <div class="row">
                                                                <div class="col-md-6 col-xl-4">
                                                                    <div class="form-group">
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="facebook" type="text"
                                                                            placeholder="Facebook Link" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-xl-4">
                                                                    <div class="form-group">
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="twitter" type="text"
                                                                            placeholder="Twitter Link" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-xl-4">
                                                                    <div class="form-group">
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="instagram" type="text"
                                                                            placeholder="Instagram Link" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-xl-4">
                                                                    <div class="form-group">
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="linkedin" type="text"
                                                                            placeholder="Linkedin Link" />
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 col-xl-4">
                                                                    <div class="form-group">
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="youtube" type="text"
                                                                            placeholder="Youtube Link" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-row profile_form m-0 align-items-center">
                                                                <div class="me-4">
                                                                    <button type="button" class="btn btn-update  mb-0" >
                                                                        Update Details
                                                                    </button>
                                                                </div>
                                                                <div class="cancel-btn">
                                                                    <a href="#" data-bs-dismiss="modal"
                                                                        aria-label="Close">Cancel</a>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="settings-delete mt-4">
                                                <div class="row align-items-center justify-content-between">
                                                    <div class="col-md-8">
                                                        <h5>Delete your account</h5>
                                                        <p>Please note, deleting your account is a permanent action and will no
                                                            be recoverable once completed.</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <button type="button" class="btn btn-delete  mb-0"
                                                            data-bs-toggle="modal" data-bs-target="#delete-account">
                                                            Delete Account
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="tab-pane fade " id="notifications">
                                            <div class="settings-header">
                                                <h5>Notifications</h5>
                                                <p>Update your account Notifications</p>
                                            </div>
                                            <div class="settings-control full-options">
                                                <ul>
                                                    <li class="d-flex align-items-center">
                                                        <label class="switch me-3">
                                                            <input type="checkbox" checked="" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <div>
                                                            <span>Allow mobile notifications</span>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <label class="switch me-3">
                                                            <input type="checkbox" checked="" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <div>
                                                            <span>Notifications from your friends</span>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <label class="switch me-3">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <div>
                                                            <span>Send notifications by email</span>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <label class="switch me-3">
                                                            <input type="checkbox" checked="" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <div>
                                                            <span>Allow connected contacts</span>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <label class="switch me-3">
                                                            <input type="checkbox" checked="" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <div>
                                                            <span>Confirm message requests</span>
                                                        </div>
                                                    </li>
                                                    <li class="d-flex align-items-center">
                                                        <label class="switch me-3">
                                                            <input type="checkbox" />
                                                            <span class="slider round"></span>
                                                        </label>
                                                        <div>
                                                            <span>Profile privacy</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div class="tab-pane fade" id="history">
                                            <div class="settings-header">
                                                <div class="row align-items-center">
                                                    <div class="col-md-8">
                                                        <h5>Device History</h5>
                                                        <p>If you see a device here that you believe wasn’t you, please contact
                                                            our account fraud department immediately.</p>
                                                    </div>
                                                    <div class="col-md-4 text-md-end">
                                                        <button class="btn logout-btn">Log out all Devices</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="logged-devices-settings">
                                                <div class="logged-device align-items-center d-flex">
                                                    <div class="device-details">
                                                        <h5>IPhone 11</h5>
                                                        <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                                    </div>
                                                    <div class="logged-btn ms-auto">
                                                        <a href="#">Sign Out</a>
                                                    </div>
                                                </div>
                                                <div class="logged-device align-items-center d-flex">
                                                    <div class="device-details">
                                                        <h5>IMac OSX · Safari 10.2</h5>
                                                        <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                                    </div>
                                                    <div class="logged-btn ms-auto">
                                                        <a href="#">Sign Out</a>
                                                    </div>
                                                </div>
                                                <div class="logged-device align-items-center d-flex">
                                                    <div class="device-details">
                                                        <h5>HP Laptop Win10</h5>
                                                        <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                                    </div>
                                                    <div class="logged-btn ms-auto">
                                                        <a href="#">Sign Out</a>
                                                    </div>
                                                </div>
                                                <div class="logged-device align-items-center d-flex">
                                                    <div class="device-details">
                                                        <h5>IMac OSX · Edge browser</h5>
                                                        <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                                    </div>
                                                    <div class="logged-btn ms-auto">
                                                        <a href="#">Sign Out</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="tab-pane fade" id="security">
                                            <div class="settings-header">
                                                <div class="row align-items-center">
                                                    <div class="col-md-8">
                                                        <h5>Change your password</h5>
                                                        <p>We will email you a confirmation when changing your password, so
                                                            please expect that email after submitting.</p>
                                                    </div>
                                                    <div class="col-md-4 text-md-end">
                                                        <button class="btn logout-btn">Forgot password</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="security-settings">
                                                <div class="password-updation">
                                                    <div class="row">
                                                        <div class="col-xl-4">
                                                            <div class="form-col form-body">
                                                                <form action="index.html">
                                                                    <div class="form-group">
                                                                        <label>Current password</label>
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="current-password" type="password" />
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>New password</label>
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="new-password" type="password" />
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Confirm password</label>
                                                                        <input
                                                                            class="form-control form-control-lg group_formcontrol"
                                                                            name="confirm-password" type="password" />
                                                                    </div>
                                                                    <div class="form-row profile_form m-0 align-items-center">
                                                                        <div class="me-4">
                                                                            <button type="button" class="btn btn-update  mb-0">
                                                                                Update Password
                                                                            </button>
                                                                        </div>

                                                                        <div class="cancel-btn">
                                                                            <a href="#" data-bs-dismiss="modal"
                                                                                aria-label="Close">Cancel</a>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div class="col-xl-8">
                                                            <div class="requirment-card">
                                                                <h4>Password requirements</h4>
                                                                <p class="py-3 mb-0">To create a new password, you have to meet
                                                                    all of the following requirements:</p>
                                                                <div class="requirements-list">
                                                                    <p>Minimum 8 character</p>
                                                                    <p>At least one special character</p>
                                                                    <p>At least one number</p>
                                                                    <p>Can’t be the same as a previous password</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div class="authentication">
                                                    <h4>Two Factor Authentication</h4>
                                                    <div class="align-items-center">
                                                        <label class="custom-radio me-2">Password <br></br> <span><a href="#"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#password-authentication">edit</a></span>
                                                            <input type="radio" name="radio" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                        <label class="custom-radio me-2">Sequrity Question <br></br> <span><a
                                                            href="#" data-bs-toggle="modal"
                                                            data-bs-target="#question-authentication">edit</a></span>
                                                            <input type="radio" name="radio" />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="slimScrollBar"
                                style={{ "background": "rgb(204, 204, 204)", width: "7px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: "99", right: "1px", height: "448.56px" }}>
                            </div>
                            <div class="slimScrollRail"
                                style={{ width: "7px", height: "100%", position: " absolute", top: "0px", display: "none", borderRadius: "7px", background: " rgb(51, 51, 51)", opacity: " 0.2", zIndex: "90", right: "1px" }}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
