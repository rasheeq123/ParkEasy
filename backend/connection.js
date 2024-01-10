const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)
.then((result) => {    
    console.log('database connected')
    
}).catch((err) => {   
    console.log(err);
    
}) ;
console.log('another statement'); 
module.exports = mongoose;


