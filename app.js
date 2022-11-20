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
app.use(express.urlencoded({
    extended: true
  }))

// import cors from 'cors';
// app.use(cors())


app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`HELPONIFY listening at http://localhost:${port}`)
})
app.post('/submit-login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(username === 'drshetty' && password === 'drshetty'){
        res.redirect('/home');
    }else{
        // res.redirect('/login');
        res.end();
        // window.alert("Invalid username or password");
    }
  })
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})


import cors from 'cors';
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors());

app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});


// DATABASE

import dotenv from 'dotenv';
import mysql from 'mysql2';
dotenv.config()

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.host,
    user            : process.env.user,
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

});


// Add a new user ticket to database
app.post('/users', (req, res) => {
    const query = `INSERT INTO users SET ${req.body}`;
    console.log(query)
    connection.query(query);
    response.status(201).send(`User added with ID: ${result.insertId}`);
});

function getDoc() {
    pool.query(`SELECT * FROM doctors where city ='${city}' and available=1`, function (error, results, fields) {
        if (error) throw error;

        if(!results[0]){
            return {};
        }
        return results.json();
    });
};

function insertUser(user) {
    pool.query(`Insert into users (ipAddress, city, pScore, testTaken) values (${user['ipAddress']}, ${user['city']}, ${user['pScore']}, ${user['testTaken']})` , 
        function (error, results, fields) {
            if (error) throw error;
        }
    );
};

export{ getDoc, insertUser}

// WEBSOCKET
import { Server } from "socket.io";
const io = new Server(3002);

io.on("connection", (socket) => {
    socket.on('send-chat-message',message=>{
        console.log(message);
        socket.broadcast.emit('chat-message',message);
    })
});
