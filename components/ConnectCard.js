'use client'
import Image from 'next/image'
import styles from './ConnectCard.module.css'
import ProfilePic from './profile'
import {useState} from 'react'

function ConnectCard({cover,name,desc,profile}){
    const [btnstate,setBtnState] = useState('Connect')
    const handleBtnState = ()=>{ 
        setBtnState('Pending...')
    }
    return(
        <div className={styles.container} >
            
            <div className={styles.coverimg}><Image src={cover} layout="fill" objectFit="cover" /></div>
            <div className={styles.profileimg}><Image src={profile} layout="fill" objectFit="cover" /></div> 
        
          <div className={styles.name}><h1><strong>{name}</strong></h1></div>

          <div className={styles.desc}><p>{desc}</p></div>
          <button onClick={handleBtnState} className={styles.connect}>{btnstate}</button>     
        </div>
    )
}
export default ConnectCard