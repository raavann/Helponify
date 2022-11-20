import express from 'express'
import path from 'path'

const app = express()

const port = process.env.PORT || 3001

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const staticPath = path.join(__dirname, "/views");

app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`HELPONIFY listening at http://localhost:${port}`)
})
app.post('/submit-login', (req, res) => {
    const username = req.body.username
    //...
    res.send(username)
    res.end()
  })
  
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
