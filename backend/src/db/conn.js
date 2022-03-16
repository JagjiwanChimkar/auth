const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jagjiwan:Jagjiwan333@cluster0.u7pyo.mongodb.net/auth?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected");
}).catch((err)=>{
    console.log("DB Not Connected ",err);
})