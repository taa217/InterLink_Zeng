'use client'
import styles from './CreateSpace.module.css'
import InviteContributors from './InviteContributors'
import { categories } from './catlist'
import {useState} from 'react'

function CreateSpace({tospace}){
   const [Next,setNext] = useState(false)
   const [spaceName,setSpaceName] = useState('')
   const [spaceDesc,setSpaceDesc] = useState('')
   const [spaceCategory,setSpaceCategory] = useState('')

const handleNext = () => {
    setNext(!Next)
}
return(
    <>{!Next &&
        <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.back} onClick={tospace}>X</div>
            <button onClick={handleNext} className={styles.btn}>Create</button>
        </div>
        <div className={styles.inner}>
        <h1 className={styles.head}><strong>Create a Space</strong></h1>
    <p className={styles.abt}>Share your interests, curate content, host discussions, and more.</p>
<div className={styles.form}>
<div>
    <h2 className={styles.headings}><strong>Name</strong></h2>
    <p className={styles.txt}>This can be changed in Space settings.</p>
    <input type='text' className={styles.input} onChange={(e)=>setSpaceName(e.target.value)}/>
</div>
<div>
    <h2 className={styles.headings}><strong>Brief description</strong></h2>
    <p className={styles.txt}>Include a few keywords to show people what to expect if they join.</p>
     <input type='text' className={styles.input} onChange={(e)=>setSpaceDesc(e.target.value)}/>
</div>
<div><h2 className={styles.headings}><strong>Space category</strong></h2>
<p className={styles.txt}>Select a category your space falls under.</p>
<select className={styles.input} onChange={(e)=>setSpaceCategory(e.target.value)}>
{categories.map((category)=>
{
    return(<option>{category.category}</option>)
}

)}
</select></div>
</div>
    
        </div>
    
    </div> || <><InviteContributors handleNext={handleNext} spaceName={spaceName} spaceDesc={spaceDesc} spaceCategory={spaceCategory}/></>}</>
    
)
}
export default CreateSpace