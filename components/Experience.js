'use client'

import ExperienceCard from './ExperienceCard'
import styles from './PersonProfile.module.css'
import {useState} from 'react'

function Experience(){
    const [addExperience,setAddExperience] = useState(false)
    const handleAddExperience = ()=>{
        setAddExperience(!addExperience)
    }
    return(
        <>
     
                {addExperience && 
                <div className={styles.addExperience}>
                    <div className={styles.top}><div onClick={handleAddExperience}><strong>X</strong></div><button className={styles.addbtn}>Add</button></div>
                    <div>
                        <p><strong>Add experience</strong></p>
                        <input type='text' className={styles.input}/>
                        <div>
                            <p><strong>Start</strong></p>
                            <input type='date' className={styles.input}/>
                            <p><strong>End</strong></p>
                            <input type='date' className={styles.input}/>
                        </div>
                    </div>
                </div>
                ||
                <div className={styles.personexperience}>
                <div className={styles.top}><div>Experience</div><div className={styles.add}><button onClick={handleAddExperience} className={styles.btnb}>Add</button></div></div>
            
                <div className={styles.detsexperience}>
                <ExperienceCard exname='CEO and Founder of ClydeAI' date='present, October 2020'/>
                <ExperienceCard exname='HR Manager at Bakers Tilly' date='October 2020 , since June 2022'/>
                <ExperienceCard exname='HR Manager at Bakers Tilly' date='October 2020 , since June 2022'/>
               
                </div>  
              </div>
                }
        </>
    )
}
export default Experience