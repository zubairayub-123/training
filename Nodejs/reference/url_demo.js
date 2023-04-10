const url = require('url');

const sampleURl = new URL('http://personalwebsite.com:9000/home.html?name=ayub&age=23');

console.log(sampleURl.href);
console.log(sampleURl.port);
console.log(sampleURl.host);
console.log(sampleURl.searchParams);
