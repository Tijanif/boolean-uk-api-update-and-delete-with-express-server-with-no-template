const express = require('express')
const morgan = require('morgan')

const app = express()

// Middleware
app.use(morgan('dev'))
app.use(express.json())

// Routes


// Listen to server

app.listen(4000, ()=> {
 console.log('Server is running on port 4000');
})