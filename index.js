
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const connectDB = require('./config/db')
const bodyParser = require('body-parser');
const Routers = require('./routes/index');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors(
   {
    origin : process.env.FRONTENT_URL,
    credentials: true
   }
));
app.use(express.json());
app.use(cookieParser());
app.use("/api",Routers);

const PORT = 8080 || process.env.PORT

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("connected to DB");
        console.log("server is running");
     })
})

