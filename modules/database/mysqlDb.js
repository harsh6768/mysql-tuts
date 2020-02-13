const Bluebird              =       require('bluebird');
const mysql                 =       require('mysql');

const connection=mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'786Hh@786',
    database : 'learning_mysql'
 });
 
connection.connect((err)=>{
    if(err) throw err;
    console.log('MySQL Connected ...');
});

global.db=Bluebird.promisifyAll(connection);
module.exports=db;