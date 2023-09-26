'use client'
import styles from './PersonProfile.module.css'
import {useState} from 'react'

function SkillsCard({skill}){
    const [visible,setVisible] = useState(true)

    const RemoveSkill = () =>{
      setVisible(false)
      
    }
  return (
  <>
  {visible && 
   <div className={styles.skillcard}> 
   <div className={styles.skillscard}><h1><strong>{skill}</strong></h1></div>
   < button onClick={RemoveSkill}><strong>Remove</strong></button >
     </div>
  }
   
   
  </>
    )
}
export default SkillsCard;