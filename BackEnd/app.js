const express = require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const connectDB=require('./config/db');

connectDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT // 5100 ;

app.get('/',(req,res)=>{
    res.send("Hello from the backend!");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}   );