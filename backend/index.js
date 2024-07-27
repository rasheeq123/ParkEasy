// impost express
const express = require('express'); // backend me ais hi import krte h unlike react 
const userRouter=require('./routers/userRouter');
const slotRouter=require('./routers/slotRouter');

const cors = require('cors');

// initialize express
const app=express();
const port= 5000;

//middleware: request aane pe uska data access kr skte h, modify krte h lekin response nhi generate kr skte h routes ki trh
app.use(express.json());  

//  agr localhost pe chalana h toh

// app.use(cors({
//     origin:['http://localhost:3000']
// }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://parkeasy-7vr1.onrender.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/user', userRouter);
app.use('/parkings', slotRouter);


//routes-request aane pe response generate krte h
app.get('/', (req , res)=>{
    res.send('response from express')
});

app.get('/home', (req , res)=>{
    res.send('Welcome to home')
});
app.get('/add', (req , res)=>{
    res.send('Wanna Add something')
});

app.get('/getall', (req , res)=>{
    res.send('response from getall')
});

app.get('/getbyslot', (req , res)=>{
    res.send('response from getbyslot')
});

app.get('/getbyid', (req , res)=>{
    res.send('response from getbyid')
});

app.get('/update', (req , res)=>{
    res.send('response from update')
});

app.get('/delete', (req , res)=>{
    res.send('response from delete')
});

app.listen(port, ()=>{
    console.log('server started')
});
