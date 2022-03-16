const express = require('express');
const app=express();
const cors = require('cors')
require('./db/conn');
const user = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

const port = process.env.PORT || 5000;


app.post("/signup",async(req,res)=>{
    try{

        const { username, email, password, confirm_password }=req.body;

        const obj=await user.findOne({email:email});
        if(obj!=null){
            res.json({msg:"Email already registered"});
            return;
        }

        if(password===confirm_password){
            const newUser=new user({
                username:username,
                email:email,
                password:password
            })

            await newUser.save();
            res.json({msg:"Successfully Sign-Up"});
        }else{
            res.json({msg:"Password Not Matching"});
        }
    }catch(err){
        res.json({msg:err.message});
    }
})

app.post("/login",async (req,res)=>{
    try{
        const {  email, password }=req.body;
        const obj=await user.findOne({email:email});

        if(obj===null){
            res.json({msg:"user doesn't exist"});
            return;
        } 

        if(obj.password===password){
            res.json({msg:"Successfully Login"});
        }else{
            res.json({msg:"Incorrect Password"});
        }

    }catch(err){
        res.status(404).json({msg:err.message});
    }
})


app.listen(port,()=>{
    console.log(`server running at ${port}`);
})

/*
You need to build a Nodejs express apis for login and signup using mongodb and integrate that
 in react website. 


The 2 apis that need to be created are : 
1. to signup any user using email , password and username 
you need to make sure that email doesn't already in use.

2. to login user using email and password. If email doesn't exist respond back with user doesn't exist
*/