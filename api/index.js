const express =require('express');
const cors =require('cors');
const mongoose =require('mongoose');
const user = require('./models/auth');
const bcrypt = require( 'bcryptjs' );  
const app = express();
const jwt = require( "jsonwebtoken" ) ; 

const salt = bcrypt.genSaltSync(10);
const secret ='asdas5das5few8rfs8ef7sd8f8';
app.use(cors());
app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json());



mongoose.connect('mongodb+srv://debmalya017:GHZ4SjSiFn7iubk7@vlog.0r8i8e9.mongodb.net/?retryWrites=true&w=majority&appName=vlog');
app.post('/register', async (req,res)=>{
    const {username,password}=req.body;
    try{
    const userDoc = await user.create({
        username,
        password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }  
    
});


app.post('/login' , async (req,res)=>{
    const {username,password}=req.body;
    const userDoc = await user.findOne({username});
    const passOK =bcrypt.compareSync(password, userDoc.password);
    
    if(passOK){
        jwt.sign({username,id:userDoc._id}, secret, {},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json('ok');
        });
    }else{
        res.status(400).json('wrong credentials');
    }

});
app.listen(3000);




// GHZ4SjSiFn7iubk7
// mongodb+srv://debmalya017:bq9Nz2b49a363L7d@expense.mutekz3.mongodb.net/?retryWrites=true&w=majority&appName=expense
