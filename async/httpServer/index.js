const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end('Hello from other side');
    }
    else if(req.url==='/about')
    {
        res.end('Hello from other  ABOUT side');
    }
    else if(req.url==='/contact')
    {
        res.end('Hello from other  CONTACT side');
    }
    else if(req.url==='/userapi')
    {
        fs.readFile(`${__dirname}/userApi/userapi.json`,'utf-8',(err,data)=>{
            // res.writeHead(data);
            console.log(data);
            const obj=JSON.parse(data);
            // res.end(data);
            // res.end(obj[0].name)
        })
        // res.end('Hello from other USERAPI side');
    }
    else
    {
        res.writeHead(404,{'content-type':'text/html'});
        res.end('Sorry 404 error!!!!!!!!!');
    }
    // console.log(req.url);
    
});

server.listen(3500,()=>{
    console.log('listening to port no 3500');
})
