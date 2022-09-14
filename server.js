const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')
const bodyParser = require ('body-parser')
const path = require('path');

//import route
const authRoute = require("./routes/auth");
const studentRoute = require("./routes/student");

dotenv.config();


//Connect DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("DB connected")
);

//middleware
app.use(express.json());
app.use(cors())
app.use(express.static(path.resolve(__dirname, "client/build")));
app.use(bodyParser.json())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

// Router middleware
app.use("/api", authRoute);
// app.use("/api/posts", postRoute);
app.use("/api", studentRoute)
app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "client/build",'index.html'));
})

app.listen(4000, () => console.log("Server is Up and Running"));
