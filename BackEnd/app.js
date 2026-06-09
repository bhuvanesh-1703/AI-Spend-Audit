const express = require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const connectDB=require('./config/db');

const authRoutes=require('./routes/authRoutes')

connectDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5100;

app.get('/',(req,res)=>{
    res.send("Hello from the backend!");
});

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}   );