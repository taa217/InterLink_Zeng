'use client'
import Connect from './connect';
import styles from './requestCard.module.css';
import Image from 'next/image';
import {useState} from 'react'

function RequestCard({desc,imgsrc,name}){
    const [isVisible,setIsVisible] = useState(true)
   const handleVisibility = ()=>{
    setIsVisible(false)
   }
    return(
        <>{isVisible && 
            <div className={styles.container}>
            <div className={styles.inner}>
                <div className={styles.namenpic}>
                    <div className={styles.img}><Image src={imgsrc} layout="fill" objectFit="cover" className={styles.pic}/></div>
                    <div className={styles.name}><p><strong>{name}</strong></p><p className={styles.desc}>{desc}</p></div>  
                </div>
                <div className={styles.conectndecline}>
                  <div className={styles.decline}><button className={styles.btn}><strong>Decline</strong></button></div>
                  <div className={styles.connect}><button onClick={handleVisibility} className={styles.btn}><strong>Accept</strong></button></div>  
                </div>
            </div>
               
                
                </div>}
        
        </>
        
    )
}
export default RequestCard;