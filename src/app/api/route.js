const connection = await mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'test_interlink',
    //socketPath: '\\.\pipe\mysql\mysqlx',
    });
    export default async function submitData(req,res){
        const con = req.body;
        console.log(con)

    }