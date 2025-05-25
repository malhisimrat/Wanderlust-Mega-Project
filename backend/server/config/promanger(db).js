
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://malhi:dbA9W8vmPT0lTbsM@malhi.6rips.mongodb.net/ProManager')
.then(()=>{
    console.log("DB Connection Successfull");
})
.catch((err)=>{
    console.log("Error in Db Connection", err);
})