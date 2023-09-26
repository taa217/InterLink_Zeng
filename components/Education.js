'use client'
import EducationCard from './EducationCard'
import styles from './PersonProfile.module.css'
import {useState} from 'react'

function Education(){
    const [addEducation,setAddEducation] = useState(false)
    const handleAddEducation = ()=>{
        setAddEducation(!addEducation)
    }
    return (
        <>
        {!addEducation && 
        <div className={styles.education}>
        <div className={styles.top}><div>Education</div><div className={styles.add} onClick={handleAddEducation}><div>Add</div></div></div>
        <div className={styles.detseducation}>
           <EducationCard inst='StanFord' major='Data Engineering'/>
           <EducationCard inst='ZHS' major='Sciences'/>
            
        </div>
        </div>
        ||
        <>
        <div className={styles.addExperience}>
                    <div className={styles.top}><div onClick={handleAddEducation}><strong>X</strong></div><button className={styles.addbtn}>Add</button></div>
                    <div className={styles.inputs}>
                        <div>
                        <p><strong>Institution</strong></p>
                        <input type='text' className={styles.input} placeholder = 'Institution'/> 
                        </div>
                        <div>
                        <p><strong>Specilisation</strong></p>
                        <input type='text' className={styles.input} placeholder = 'eg Data Engineering, Commercials'/>
                        </div>
                       
                        
                        <div>
                            <div>
                            <p><strong>Start</strong></p>
                            <input type='date' className={styles.input}/>
                            </div>
                            
                            <div>
                            <p><strong>End</strong></p>
                            <input type='date' className={styles.input}/>
                            </div>
                            
                            <div>
                            <p><strong>Level</strong></p>
                            <select className={styles.input}>
                                <option>Education Level</option>
                                <option>Primary Level</option>
                                <option>Secondary Level</option>
                                <option>Advanced Level</option>
                                <option>University Level</option>
                            </select>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </>
        }
         

        
        </>
    )
}
export default Education