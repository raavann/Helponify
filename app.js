import express from 'express'
import path from 'path'

const app = express()

const port = process.env.PORT || 3001

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const staticPath = path.join(__dirname, "/views");

// path for assets
app.use('/css', express.static(path.join(__dirname, "assets/css")));
app.use('/img', express.static(path.join(__dirname, "assets/img")));
app.use('/js', express.static(path.join(__dirname, "assets/js")));
app.use('/db', express.static(path.join(__dirname, "assets/db")));

// path for views
app.use('/views', express.static(path.join(__dirname, "views")));


// import cors from 'cors';
// app.use(cors())


app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`HELPONIFY listening at http://localhost:${port}`)
})


// DATABASE

import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config()

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.host,
    user            : process.env.username,
    password        : process.env.password,
    database        : process.env.database,
    port : "3306"
});
    
  
// get list of available doctors in a city
app.get('/doctors/:city', async (req, res) => {
    const {city} = req.params;

    pool.query(`SELECT * FROM doctors where city ='${city}' and available=1`, function (error, results, fields) {
        if (error) throw error;

        if(!results[0]){
            return res.json({});
        }
        res.json(results);
    });

    // const query = `SELECT * FROM doctors where city ='${city}' and available=1`;
    // const [rows] = await connection.query(query);
    // if(!rows[0]){
    //     return res.json({});
    // }
    // res.json(rows);
});


// Add a new user ticket to database
app.post('/users', (req, res) => {
    const query = `INSERT INTO users SET ${req.body}`;
    console.log(query)
    connection.query(query);
    response.status(201).send(`User added with ID: ${result.insertId}`);
});