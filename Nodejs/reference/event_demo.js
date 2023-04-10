const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{}

const myEvent = new MyEventEmitter();

myEvent.on('event', () => console.log('event triggered'));

myEvent.emit('event');
myEvent.emit('event');
myEvent.emit('event');
