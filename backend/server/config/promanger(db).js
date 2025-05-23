
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://malhi:Rocky13june@malhi.6rips.mongodb.net/ProManager')
.then(()=>{
    console.log("DB Connection Successfull");
})
.catch((err)=>{
    console.log("Error in Db Connection", err);
})