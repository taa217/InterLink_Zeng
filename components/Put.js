
//import mysql from 'mysql2/promise'

const getServerSidePropsi = async () =>{
    console.log('running')
  const connection = await mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'test_interlink',
  //socketPath: '\\.\pipe\mysql\mysqlx',
  });
  const result = await connection.query(`SELECT * FROM users`);
  connection.end();
  return{
  props: {
  data: result,
  },
  };
  };


  function Put({data}){
    const datg = use (getServerSidePropsi())
    return(
        <div>{datg}</div>
    )
  }
  export default Put