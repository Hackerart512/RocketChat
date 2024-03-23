import React, { createContext, useContext, useState, useEffect, useRef, useMemo } from "react";
import { io } from "socket.io-client";


// import getContactList from "../api/getContactList"
const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {

  const socket = useRef();

  useEffect(() => {
    socket.current = io('localhost:9000')
  }, [])

  // const socket = useMemo(() => io("localhost:9000"), []);

  const [account, setAccount] = useState([]);

  const [person, setPerson] = useState({});

  const [contactList, setContactList] = useState([]);
  const [activeUser, setActiveUser] = useState([]);

  useEffect(() => {
    // if (socket.current) {
      socket.current.emit('addUser', account);
      socket.current.on('getUsers', users => {
        setActiveUser(users)
        console.log(users)
      }
      )
    // }
  }, [account])

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
    <SocketContext.Provider value={{ socket, account, contactList, getContactList, person, setPerson, activeUser, setActiveUser }}>
      {props.children}
    </SocketContext.Provider>
  );
};
