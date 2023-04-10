const {log} = require('console');

const fs = require('fs');
const path = require('path');

        //create folder

fs.mkdir(path.join(__dirname, '/nkdebug'),{}, (err) => {
    if(err) throw err;
    console.log('folder created');
});

        // create and write to file

fs.writeFile(path.join(__dirname, '/nkdebug','demo.text'),'welcome', (err) =>{
    if(err) throw err;
    console.log('File written');
});

        //Read file

fs.readFile(path.join(__dirname, '/nkdebug','demo.text'),'utf8', (err,data) =>{
    if(err) throw err;
    console.log(data);
}); 

        //Rename file

fs.rename(path.join(__dirname, '/nkdebug', 'demo.text'), path.join(__dirname,'/nkdebug','demo1.text'), (err) =>{
    if(err) throw err;
    console.log('file renamed');
})