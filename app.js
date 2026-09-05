require('dotenv').config()
const express = require('express')
const connDB = require('./db')
const app = express()
const todoRoutes = require('./routes/todoRoutes.js')
const cors = require('cors')
app.use(express.json());
app.use(cors())
connDB()

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})