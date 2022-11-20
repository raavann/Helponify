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