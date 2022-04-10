const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3001


const staticPath = path.join(__dirname, "/views");

// path for assets
app.use('/css', express.static(path.join(__dirname, "assets/css")));
app.use('/img', express.static(path.join(__dirname, "assets/img")));
app.use('/js', express.static(path.join(__dirname, "assets/js")));
app.use('/views', express.static(path.join(__dirname, "views")));


app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})