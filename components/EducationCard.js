'use client'
import styles from './PersonProfile.module.css'
import {useState} from 'react'


function EducationCard({inst,major}){
    const [visible,setVisible] = useState(true)

    const RemoveEducation = () =>{
      setVisible(false)
    }

    return(
        <>
        {visible &&
        <div className={styles.exp}>
        <div className={styles.educationcard}>
                          
              <div className={styles.institution}><h1><strong>{inst}</strong></h1></div>
              <div className={styles.dets}>Advanced Level</div>
              <div className={styles.dets}>
                  <div>{major},</div>
                  <div className={styles.tym}>June 2019 - August 2021</div>
              </div>
          </div>
          <button className={styles.btnb} onClick={RemoveEducation}><strong>Remove</strong></button>
          </div>
        }
        
        </>
    )
}
export default EducationCard