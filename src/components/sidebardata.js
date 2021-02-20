import React from 'react'
//import { FaBars } from "react-icons/fa"
import { AiFillHome, AiOutlineUser } from "react-icons/ai"
//import {  } from "react-icons/io"

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <AiOutlineUser />,
        cName: 'nav-text'
    },


]