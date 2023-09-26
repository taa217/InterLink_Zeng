'use client'
import styles from './PersonProfile.module.css'
import SkillsCard from './SkillsCard'
import {useState} from 'react'

function Skills(){
    const [addSkill,setAddSkill] = useState(false)
    const handleAddSkill = ()=>{
        setAddSkill(!addSkill)
    }
    return(
        <>{
            !addSkill &&
            <div className={styles.skills}>
            <div className={styles.top}><div>Skills</div><div className={styles.add}><button onClick={handleAddSkill}>Add</button></div></div>
            <div className={styles.skillslist}>
                
                <SkillsCard skill='Web Development'/>
                <SkillsCard skill='Web Development'/>
                <SkillsCard skill='Web Development'/>
                <SkillsCard skill='Web Development'/>
                
            </div>
            </div> ||
             <div className={styles.addExperience}>
             <div className={styles.top}><button onClick={handleAddSkill}><strong>X</strong></button><button className={styles.addbtn}>Add</button></div>
             <div className={styles.inputs}>
                 <div>
                 <p><strong>Skill</strong></p>
                 <input type='text' className={styles.input} placeholder = 'e.g, Web Development, Business Management...'/> 
                 </div>
                 </div>
                 </div>
                   }
        
        </>
    )
}
export default Skills
