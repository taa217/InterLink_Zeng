'use client'
import FirstSignUp from './FirstSignUp'
import styles from './userSignUp.module.css'
import {useState} from 'react'

function UserSignUp(){
    const [FirstDetails,setFirstDetails] = useState(true)
  return(
    <div className={styles.container}>

     <FirstSignUp/>
    </div>
  )
}
export default UserSignUp