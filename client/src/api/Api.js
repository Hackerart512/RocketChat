import React from 'react'

const Api = () => {
    return (
         <>
         </>
    )
}

// Get our Contact
const getContactList = async () => {
    const response = await fetch('http://localhost:5000/api/auth/mycontact', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': `${localStorage.getItem('token')}`,
        }
    })
    const json = await response.json();
    return json;
}

export default { Api, getContactList }