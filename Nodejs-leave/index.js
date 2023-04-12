const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message:"Hello World"
    })
})

app.post('/api/leave', verifyToken, (req, res)=> {

    jwt.verify(req.token, 'secretkey', (err, data) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                Employee: "I need a Leave for tomorrow",
                data
            })
        }
    })
})

app.post('/api/approval', (req, res) => {

    // leave Approval

    const approve ={
        Manager: "leave is approved"
    }

    jwt.sign({approve}, 'secretkey', (err, token) =>{
        res.json({
            token
        })
    })

})

app.post('/api/reject', (req, res) => {

    //Rejection
    const rejection ={
        Manager: "Leave is rejected"
    }

    jwt.sign({rejection}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    })
})

function verifyToken(req, res, next){

    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        // set the toeken
        req.token = bearerToken;
        next();

    }
    else{

        res.sendStatus(403);
    }
}



app.listen(5002, ()=> {
    console.log("server is running");
})
