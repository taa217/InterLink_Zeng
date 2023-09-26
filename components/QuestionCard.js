'use client'
import Image from 'next/image'
import styles from './QuestionCard.module.css'
import ProfilePic from './profile'
import {useState} from 'react'
import AnsQuestion from './AnsQuestion'
function QuestionCard(props){
  const [Ans,setAns] = useState(false)
  const handleAns = ()=>{
    setAns(!Ans)
  }
    return(
    <>
    {!Ans && 
    <div className={styles.container}>
    <div className={styles.inner}>
     <div className={styles.name}><div className={styles.img}><Image src={props.ppsrc} layout="fill" objectFit="cover"/></div><div className={styles.from}>{props.from}</div></div>
      <div className={styles.question}><strong>{props.question}</strong></div>
      <div className={styles.reaction}>
     <div className={styles.ans} onClick={handleAns}><Image src="/answer.png" alt="answer" width="20" height="20" /><div className={styles.reac}>Answer</div></div>
     <div className={styles.ans}><Image src="/answer.png" alt="forward" width="20" height="20"/><div className={styles.reac}>Follow</div></div>
      </div>
    </div>
  </div> 
  ||
  <> <AnsQuestion question={props.question} cancel={handleAns} imgsrc={props.ppsrc} from={props.from}/></>
    }

    
    </>
        
    )
}
export default QuestionCard