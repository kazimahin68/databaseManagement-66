const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())

const users = [
    {id: 1, name: "karim", email: "karim@gmail.com"},
    {id: 2, name: "Rahim", email: "rahim@gmail.com"},
    {id: 3, name: "Babul", email: "babul@gmail.com"},
    {id: 4, name: "Shemol", email: "shemol@gmail.com"}
]

app.get('/', (req, res) =>{
    res.send("Hello, This is my Node js server site")
})

app.get('/users', (req, res) =>{
    res.send(users)
})

app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
    // console.log(req.body)
})


app.listen(port, ()=>{
    console.log(`The server is running from the Port: ${port}`)
})  