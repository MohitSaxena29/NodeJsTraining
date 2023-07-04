const EventEmitter=require('events');

const event=new EventEmitter();

event.on('hiii',()=>{
    console.log('my name is mohit ji');
})

event.on('hiii',()=>{
    console.log('my name is saxena');
})

event.on('hiii',()=>{
    console.log('my name is saxena ji');
})
// event.emit('hiii'); // event firing

event.on('checkPage',(sc,status)=>{
    console.log(`Successful with status code ${sc} and status ${status}`);
})


event.emit('checkPage',200,'ok');

// with one event we can call multiple call back functions
 
