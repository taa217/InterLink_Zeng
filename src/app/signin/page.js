
//import { useState,useEffect } from "react";
import {Suspense} from 'react'
import SignIn from "../../../components/SignIn"
import mysql from 'mysql2/promise'
import {use} from 'react'
import {serverResponse} from 'react'
import QuestionCard from '../../../components/QuestionCard'

// const getServerSidePropsi = async () =>{
//   console.log('running')
// const connection = await mysql.createConnection({
// host: 'localhost',
// port: '3306',
// user: 'root',
// password: '',
// database: 'test_interlink',
// //socketPath: '\\.\pipe\mysql\mysqlx',
// });
// const result = await connection.query(`INSERT INTO categories(cat_id,name) VALUES (Null,'Agriculture and Farming')`);
// connection.end();
// return{
// props: {
// data: result,
// },
// };
// };


function SignInUser({data}){
//const dta = use (getServerSidePropsi()) 
 // console.log(dta.props.data)
  
    return(
      <Suspense fallback={<h1>Loadind</h1>}>
         <div><SignIn/>
      {/* {dta.props.data[0][0].email}
      <QuestionCard question={dta.props.data[0][0].type} from={dta.props.data[0][0].f_name}/> */}
      </div>
      </Suspense>
     
    )
}
export default SignInUser 
