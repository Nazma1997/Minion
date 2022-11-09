const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const app = express()
// const port = 4000
const connectDB = require('./db')
const routes = require('./routes/index');
dotenv.config()
app.use(cors());
app.use(express.json());

// fetching All routes
app.use(routes)




connectDB('mongodb://localhost:27017/Minions')
.then(() => {
  console.log('DataBase is Connected')
  app.listen(5000, () => {
    console.log('Server is Listening on port 5000');
})
})
.catch(error => {
     console.log(error)
})
