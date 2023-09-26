'use client'
import styles from './FirstSignUp.module.css'
import Link from 'next/link'
import {useState} from 'react'
import SecondSignUp from './SecondSignUp'

function FirstSignUp(){
   
    const handleSubmit = (event)=>{
        setToSecondForm(true)
        event.preventDefault()
        }
    const [ToSecondForm,setToSecondForm] = useState(false)
    const [Firstname,setFirstName] = useState('')
    const [Lastname,setLastName] = useState('')
    const [Email,setEmail] = useState('')
    const [Password,setPassword] = useState('')
    const [showPassword,setShowpassword] = useState(false)

const showPass = ()=>{
setShowpassword(!showPassword)
}
    
    return(
        <> {!ToSecondForm &&
    <div className={styles.container}>
    <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
    <div className={styles.signupdesc}><h2>Join InterLink</h2></div>
    <div className={styles.formdiv}>
     <form onSubmit={handleSubmit} method='post' className={styles.form} >
         <div className={styles.input}>
             <label >First name:</label>
         <input placeholder='Enter First name'  name='firstname' required onChange={(event) => setFirstName(event.target.value)} className={styles.in}></input>
         </div>
         <div className={styles.input}>
             <label>Last name:</label>
         <input placeholder='Enter Last name'  name='lastname' required onChange={(event) => setLastName(event.target.value)} className={styles.in}></input>
         </div>
         <div className={styles.input}>
             <label >Email:</label>
         <input placeholder='Email...' type="email" name='email' required onChange={(event) => setEmail(event.target.value)} className={styles.in}></input>
         </div>
         <div className={styles.input}>
             <label >Password:</label>
         <input placeholder='Password' type={showPassword ? 'text' : 'password'}  name='password' required onChange={(event) => setPassword(event.target.value)} className={styles.in}></input>
         <div className={styles.passw}><input type='checkbox' onChange={showPass}/> <p>Show Password</p></div>
         </div>
         
         <p>Already have an acccount? <Link href='/signin' className={styles.link
        
        }>SignIn</Link></p>
         <p>By clicking Join InterLink, you agree to the InterLink <Link href='#' className={styles.link}>User Agreement</Link>,<Link href="#" className={styles.link}> Privacy Policy</Link> and <Link href="#" className={styles.link}>Cookie Policy.</Link></p>
         <button type='submit' className={styles.btn}>Join InterLink</button>
     </form>
    </div>
   <footer className={styles.footer}>InterLink Global Technologies</footer>  
   </div> || <div><SecondSignUp firstname={Firstname} lastname={Lastname} email={Email} password={Password} /></div>}
   </>
    )  
}

export default FirstSignUp
