
import styles from './Signi.module.css'
import Link from 'next/link'
import MYSQL from 'mysql2'

    


function SignIn(){
    return(
        <div className={styles.container}>
    <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
    <div className={styles.signupdesc}><h2>Sign In</h2></div>
    <div className={styles.formdiv}>
     <form method='get' className={styles.form} >
        
         <div className={styles.input}>
             <label >Email:</label>
         <input placeholder='Email...' type="email" name='email' required className={styles.in}></input>
         </div>
         <div className={styles.input}>
             <label >Password:</label>
         <input placeholder='Password' type="password" required name='password' className={styles.in}></input>
         </div>
         <p>Don't have an account? <Link href='/' className={styles.link}>Join InterLink</Link></p>
         <Link href='/home'><button type="submit" className={styles.btn}>Sign In</button></Link>
         
         </form>
         </div>
         </div>
    )
    }
export default SignIn