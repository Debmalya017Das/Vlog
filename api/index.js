const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose');
const user = require('./models/auth');
const app = express();



app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://debmalya017:GHZ4SjSiFn7iubk7@vlog.0r8i8e9.mongodb.net/?retryWrites=true&w=majority&appName=vlog');
app.post('/register', async (req,res)=>{
    const {username,password}=req.body;
    try{
    const userDoc = await user.create({username,password});
    res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
    
    
})

app.listen(3000);
// GHZ4SjSiFn7iubk7
// mongodb+srv://debmalya017:bq9Nz2b49a363L7d@expense.mutekz3.mongodb.net/?retryWrites=true&w=majority&appName=expense
