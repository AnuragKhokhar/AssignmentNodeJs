const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//Max current maximum listeners
console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);

//Set the max no. of listeners to 5
eventEmitter.setMaxListeners(5);
console.log(`The Updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`);