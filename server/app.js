const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || 3031;

//import routes
// const userRoute = require ('./routes/user');
const authRoute = require ('./routes/auth');
const postRoute = require('./routes/posts');


//middlewares
app.use(cors())
app.use(express.json());
// app.use('/user', userRoute);
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

//Routes

 
// connect todb
mongoose.connect(
    process.env.DB_CONNECTION_URL
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, ()=>console.log("conneted to DB"));


//listening
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});