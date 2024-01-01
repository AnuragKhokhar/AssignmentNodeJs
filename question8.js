const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on("subscribe", (entName)=>{
    console.log(`Thanks for subscribing to ${entName}`);
})

eventEmitter.emit("subscribe", "College Wallah");
