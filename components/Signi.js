'use client'
import Link from 'next/link'
import styles from './Signi.module.css'
import {useState} from 'react'

function Signi(){
    const [Education,setEducation] = useState(false)
    const handleclick =(e)=>{
        setEducation(true)
    e.preventDefault();
    }
    const [Student,setStudent] = useState(false)
    const handleStudent = (e)=>{
        setStudent(!Student)
        e.preventDefault
    }
  
    return(
    <>
        {!Education &&  <div className={styles.container}>
       <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
       <div className={styles.signupdesc}><h2>Join InterLink</h2></div>
       <div className={styles.formdiv}>
        <form className={styles.form}>
            <div className={styles.input}>
                <label >First name:</label>
            <input placeholder='Enter First name' required  className={styles.in}></input>
            </div>
            <div className={styles.input}>
                <label>Last name:</label>
            <input placeholder='Enter Last name' required className={styles.in}></input>
            </div>
            <div className={styles.input}>
                <label >Email:</label>
            <input placeholder='Email...' type="email" required className={styles.in}></input>
            </div>
            <div className={styles.input}>
                <label >Password:</label>
            <input placeholder='Password' type="password" required className={styles.in}></input>
            </div>
            <p>Already have an acccount? <Link href='/signin' className={styles.link}>SignIn</Link></p>
            <p>By clicking Join InterLink, you agree to the InterLink <Link href='#' className={styles.link}>User Agreement</Link>,<Link href="#" className={styles.link}> Privacy Policy</Link> and <Link href="#" className={styles.link}>Cookie Policy.</Link></p>
            <button className={styles.btn} onClick={handleclick}>Join InterLink</button>
        </form>
       </div>
      <footer className={styles.footer}>InterLink Global Technologies</footer>  
      
      </div>
       ||
       <div>
       {!Student &&
        <div className={styles.container}>
        <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
        <div className={styles.signupdesc}><h2>Add your most recent work experience</h2></div>
        <div className={styles.check}><div>I'm a student</div><div><input  type="checkbox" onChange={handleStudent}></input></div></div>
        <div className={styles.formdiv}>
            <form className={styles.form}>
          <label for="work"><strong>Most recent job title</strong></label>
          <input type="text"  className={styles.in}></input>
          <button className={styles.btn} disabled>Continue</button>
          </form>
        </div>
        </div> || <div className={styles.container}>
        <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
        <div className={styles.signupdesc}><h2>Add your education</h2></div>
        <div className={styles.check}><div>Employed</div><div><input type="checkbox"  onChange={handleStudent}></input></div></div>
        <div className={styles.formdiv}>
            <form className={styles.form}>
            <div className={styles.input}>
                <label >School or college:</label>
            <input   className={styles.in}></input>
            </div>
            <div className={styles.input}>
                <label >Level:</label>
           <select placeholder='Education Level' className={styles.in}>
           <option>Education Level</option>
            <option>Primary Level</option>
            <option>Secondary Level</option>
            <option>Advanced Level</option>
            <option>University Level</option>
           </select>
            </div>
            <div className={styles.input}>
                <label >Specialization:</label>
            <input  placeholder='e.g Sciences,Artificial Intelligence...' className={styles.in}></input>
            </div>
            <div className={styles.years}>
                <select className={styles.in}>
<option>Start year</option>
<option>2018</option>
<option>2019</option>
<option>2020</option>
<option>2021</option>
<option>2022</option>
<option>2023</option>
                </select>
                <select className={styles.in}>
<option>End year</option>
<option>2018</option>
<option>2019</option>
<option>2020</option>
<option>2021</option>
<option>2022</option>
<option>2023</option>
                </select>
            </div>
          <Link href="/categories"><button className={styles.btn}>Continue</button></Link>
          </form>
        </div>
        </div> }</div>
       }
    </>
    )
}
export default Signi