import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql';

// console.log(process.env.host)

const db  = mysql.createConnection({
  connectionLimit : 10,
  host            : "helponify.czhmaiwetysj.ap-south-1.rds.amazonaws.com",
  user            : "admin",
  password        : "#Anita1999",
  database        : "my_db",
  port : "3306"
});
  

db.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log('connected')
})