import React, { createContext, useMemo, useContext, useState, useEffect } from "react";
// import { io } from "socket.io-client";


// import getContactList from "../api/getContactList"
const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  //   const socket = useMemo(() => io("localhost:8000"), []);

  const [account, setAccount] = useState([]);

  const [contactList, setContactList] = useState([])


  // user account
  const userId = async () => {
    const response = await fetch('http://localhost:5000/api/auth/getuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${localStorage.getItem('token')}`,
      }
    })
    const json = await response.json();

    await setAccount(json.user);
  }
  // user account


  // // Get our Contact
  const getContactList = async () => {
    const response = await fetch('http://localhost:5000/api/auth/mycontact', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': `${localStorage.getItem('token')}`,
      }
    })
    const json = await response.json();

    await setContactList(json);
   

  }

  useEffect(() => {
    userId()
    getContactList()

  }, []);

  return (
    <SocketContext.Provider value={{ account, contactList, getContactList }}>
      {props.children}
    </SocketContext.Provider>
  );
};
