import mysql from 'mysql2'
//import auth from 'next-auth'

export default async function handler(req,res){
    
        const connection = await mysql.createConnection({
             host: 'localhost',
             user: 'root',
             password: '',
             database: 'test_interlink' ,
         });

         try{
            const query = "SELECT * FROM users"
            const values = []
            const [results] = await connection.execute(query,values)
            connection.end()
            res.status(200).json({name: "Clyde Tadiwa"})
            console.log([results])
         } catch(error){
            //res.status(500).json[{error:error.message}];
         }
}