const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define an event handler
const myEventHandler = () => {
    console.log('Event handler triggered!');
};

// Add the event handler to the "myEvent" event
eventEmitter.on('myEvent', myEventHandler);

// Emit the "myEvent" event
console.log('Calling event handler:');
eventEmitter.emit('myEvent');

// Remove the event handler
eventEmitter.removeListener('myEvent', myEventHandler);

// Emit the "myEvent" event again
console.log('Calling event handler after removal:');
eventEmitter.emit('myEvent');
