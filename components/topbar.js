'use client'
import {useState} from 'react'
import { requestToBodyStream } from "next/dist/server/body-streams";
import Link from "next/link";
import styles from './topbar.module.css'
import ProfilePic from "./profile";
import Image from "next/image";
import SideBar from './SideBar';

const Header = ({showSidebar,toggleSideBar,})=>{
return(
    <div  className={styles.container}>
       <div onClick={toggleSideBar} className={styles.itemLeft}><ProfilePic/></div>
        <div className={styles.appname}>InterLink</div>
        <div className={styles.itemRight}>
            <div className={styles.rightcomp}>
            <div><Image src="/search.png" alt="search" width='24' height='24'/></div>
            <Link href="/messages"><Image src="/messages.png" alt="messages" width='24' height='24'/></Link>

        </div>
        </div>
        <hr></hr>
    
    </div>
)
}

export default Header;