const express = require('express')
const app = express();
app.use(express.json())
app.listen(9000, () => console.log("OK"));


const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})

app.get('/', (req, res) => {
    res.send("Evelin");
})
