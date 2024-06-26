import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updatePassword } from '../../api/Api';

const SecurityTab = ({ activeTab }) => {

    // react hook
    const [passwords, setPasswords] = useState({});
    // react hook

    // react js renderHook
    let navigate = useNavigate();

    const handleSecuritySubmit = async (event) => {


        event.preventDefault();

        console.log(passwords);

        if (passwords.newPassword === passwords.confirmPassword) {
            const json = await updatePassword(passwords)
            if (json.success) {
                navigate('/')
            }else {
                window.alert(json.message)
            }
        }
        else{
            window.alert("Password is not same!")
        }

    }


    const handleChange = (event) => {
        // console.log(event.target.value, event.target.name);

        const { name, value } = event.target;
        setPasswords({
            ...passwords,
            [name]: value
        });
    }

    return (
        <>
            <div className={`tab-pane  show ${activeTab === 'tab4' ? 'active' : ''}`} id="security">
                <div className="settings-header">
                    <div className="row align-items-center">
                        <div className="col-md-8 flex flex-col items-start justify-center">
                            <h5>Change your password</h5>
                            <p>We will email you a confirmation when changing your password, so
                                please expect that email after submitting.</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <button className="btn logout-btn">Forgot password</button>
                        </div>
                    </div>
                </div>
                <div className="security-settings">
                    <div className="password-updation">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="form-col form-body">
                                    <form onSubmit={handleSecuritySubmit} method="put" action="http://localhost:5000/api/profile/updateprofile" enctype='multipart/form-data'>
                                        <div className="form-group">
                                            <label>Current password</label>
                                            <input
                                                onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                type="password" name="oldPassword" />
                                        </div>
                                        <div className="form-group">
                                            <label>New password</label>
                                            <input
                                                onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="newPassword" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <input
                                                onChange={handleChange}
                                                className="form-control form-control-lg group_formcontrol"
                                                name="confirmPassword" type="password" />
                                        </div>
                                        <div className="form-row profile_form m-0 align-items-center">
                                            <div className="me-4">
                                                <button type="submit" className="bg-[#420ba1]   mb-0 btn update-btn">
                                                    Update Password
                                                </button>
                                            </div>

                                            <div className="cancel-btn">
                                                <a href="#" data-bs-dismiss="modal"
                                                    aria-label="Close">Cancel</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="requirment-card">
                                    <h4 className='text-left'>Password requirements</h4>
                                    <p className="py-3 mb-0 text-left">To create a new password, you have to meet
                                        all of the following requirements:</p>
                                    <div className="requirements-list ">
                                        <p className="text-left">Minimum 8 character</p>
                                        <p className="text-left">At least one special character</p>
                                        <p className="text-left">At least one number</p>
                                        <p className="text-left">Can’t be the same as a previous password</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="authentication">
                        <h4 className='text-left'>Two Factor Authentication</h4>
                        <div className="flex flex-col items-start justify-center">
                            <label className="custom-radio   flex flex-col items-start justify-center">Password <br></br> <span><a href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#password-authentication">edit</a></span>
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                            <label className="custom-radio me-2 flex flex-col items-start justify-center">Sequrity Question <br></br> <span><a
                                href="#" data-bs-toggle="modal"
                                data-bs-target="#question-authentication">edit</a></span>
                                <input type="radio" name="radio" />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityTab
