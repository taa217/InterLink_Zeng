// import mysql from 'mysql2/promise'

// export const getServerSidePropsi = async () =>{
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