'use client'
import styles from './PersonProfile.module.css'
import {useState} from 'react'

function About(){
    const [abt,setAbt] = useState(false)

    const handleAbout = () =>{
        setAbt(!abt)
    }

    let about = 'Clyde Tadiwanashe is the founder and current CEO of ClydeAi, a startup company which focuses on providing AI services to Africa.'
    return(
        <div className={styles.details}>
            <div className={styles.about}>
                    <div className={styles.innerabout}>
                        <div className={styles.top}><div className={styles.abt}><h1><strong>About</strong></h1></div><div onClick={handleAbout}>{!abt && 'Edit' || 'X'}</div></div>
<div className={styles.personAbout}>
    {!abt &&  <p>{about}</p> 
     ||
     <>
     <textarea defaultValue={about} cols='20' rows='10' className={styles.editabt} onChange = {(e)=> about= e.target.value}/> 
    <div className={styles.btnarea}><button className={styles.btn}>Save</button></div> 
     </>
    }
    
</div>
                        </div>
                </div>
        </div>
    )
}
export default About;
