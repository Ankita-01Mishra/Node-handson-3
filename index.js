const express=require('express');
const app=express();


//Middleware
const middleware=(req,res,next)=>{
    console.log('Hello This is our Middleware');
    console.warn("current route is ", req.originalUrl);
    next();
}



app.get('/',(req,res)=>{
    res.send('Hello , This is the Main Page')
})
app.get('/about',middleware,(req,res)=>{
    console.log('Hello, This is my About');
    res.send('Hello , Check about here')
 
})
app.get('/contact',middleware,(req,res)=>{
    res.send('This is contact')
})
app.get('/login',middleware,(req,res)=>{
    res.send('Hello,Please log in here')
})
app.get('/logout',middleware,(req,res)=>{
    res.send('You can logout from here')
})

app.listen(3001,()=>{
    console.log('Application started on port 3001!!');
})