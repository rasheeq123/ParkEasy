const mongoose = require('mongoose');

const url= "mongodb+srv://Rasheeq_123:987654321@cluster0.7jaya56.mongodb.net/miniprojectdatabase?retryWrites=true&w=majority";



mongoose.connect(url)
.then((result) => {    
    console.log('database connected')
    
}).catch((err) => {   
    console.log(err);
    
}) ;
console.log('another statement'); 
module.exports = mongoose;


