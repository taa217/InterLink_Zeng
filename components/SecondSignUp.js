import styles from './FirstSignUp.module.css'
import {useState} from 'react'
import Link from 'next/link'
import Put from './Put';
//import { getServerSidePropsi } from './insert';
//import mysql from 'mysql2/promise'


function SecondSignUp({firstname,lastname,email,password}){
    
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
    // const submitd = async () => {
    //     const response = await fetch('/api/route.js',{
    //         method:'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({'name':'clide'}),
    //     });
    //     const result = await response.json();
    //     if (result.success){
    //         console.log('success')
    //     }else{
    //         console.log('fail')
    //     }
    // };
    // const getServerSidePropsi = async () =>{
    //     console.log('running')
    //   const connection = await mysql.createConnection({
    //   host: 'localhost',
    //   port: '3306',
    //   user: 'root',
    //   password: '',
    //   database: 'test_interlink',
    //   //socketPath: '\\.\pipe\mysql\mysqlx',
    //   });
    //   const result = await connection.query(`INSERT INTO categories(cat_id,name) VALUES (Null,'Artificial Intelligence and Machine Learning')`);
    //   connection.end();
    // //   return{
    // //   props: {
    // //   data: result,
    // //   },
    // //   };
    //   };
      
    
    
    return(<>
        {!Student && <div className={styles.container}>
        <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
        <h1 className={styles.welcome}><strong>Welcome, {firstname}!</strong></h1>
        <div className={styles.signupdesc}><h2>Add your most recent work experience</h2></div>
        <div className={styles.check}><div>I'm a student</div><div><input  type="radio"  onChange={handleStudent}></input></div></div>
        <div className={styles.formdiv}>
            <form className={styles.form}>
                <div className={styles.input}>
            <label for="work"><strong>Most recent job title</strong></label>
          <input type="text"  className={styles.in}></input>
                </div>
                <div className={styles.input}>
            <label for="work"><strong>Most recent company</strong></label>
          <input type="text"  className={styles.in}></input>
                </div>
         
          <Link href='/categories'><button className={styles.btn}>Continue</button></Link>
          </form>
        </div>
        </div>  || <div className={styles.container}>
        <div className={styles.name}><h1><strong>InterLink</strong></h1></div>
        <div className={styles.signupdesc}><h2>Add your education</h2></div>
        <div className={styles.check}><div>Employed</div>
        <div>
            <input type="checkbox" onChange={handleStudent}></input>
            </div>
            </div>
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
        </div>
             }
        </>
    )
}
export default SecondSignUp;