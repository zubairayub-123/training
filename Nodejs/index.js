// const Person = require('./person');

// // import Person from

// const pers = new Person('John Doe', 30);
// pers.welcome();


// //console.log(person);


const Logger = require('./Logger');
const logger = new Logger();
logger.on('message', (data) => console.log('called:',(data)));
logger.log('hello world');