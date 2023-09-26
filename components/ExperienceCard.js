'use client'
import styles from './PersonProfile.module.css'
import {useState} from 'react'

function ExperienceCard({exname,date}){
    const [visible,setVisible] = useState(true)

  const RemoveExperience = () =>{
    setVisible(false)
  }
    return(
        <>
        {visible && 

<div className={styles.exp}>
<div className={styles.experiencecard}>
    <div className={styles.experiencename}>
        <h1><strong>{exname}</strong></h1>
        </div>
    <div className={styles.experiencetime}>{date}</div>
</div>
<button className={styles.btnb} onClick={RemoveExperience}><strong>Remove</strong></button>
</div>
        
        }
        
       
        </>
    )
}
export default ExperienceCard