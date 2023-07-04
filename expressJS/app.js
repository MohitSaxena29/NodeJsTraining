const express=require('express');
const path=require('path');
const app=express();

console.log(__dirname);
console.log(path.join(__dirname,'./public'));
const staticpath=path.join(__dirname,'./public')

// build in middleware

// app.use(express.static());

// app.get(route,callback);

app.use(express.static(staticpath));

app.get('/',(req,res)=>{
    res.send('hello from express')
})

app.get('/about',(req,res)=>{
    res.send('hello from about')
})

// to give html quote in html

app.get('/contact',(req,res)=>{
    res.write('<h1>Hii contact</h1>');
    res.write('<h2>Hii buyeeeeeee</h2>');
    res.send();
})


// to send array of object

app.get('/temp',(req,res)=>{
    res.send(
    [
        {
        id:"Mohit",
        age:20
        },
        {
                    
            id:"Rohit",
            age:21
        
        }
    ])
})

app.listen(3600,()=>{
    console.log('running on port 3600')
})



//middleware

// req and res ke beech mai jo bhi hota hai that is handled by middleware


