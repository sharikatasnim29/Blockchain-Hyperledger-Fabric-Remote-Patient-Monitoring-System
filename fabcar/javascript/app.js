
const exp = require('constants')
var express = require('express')
var query = require('./query.js')
var app = express ()
const port = 3000

app.use(express.json())

app.get('/',(req,res)=>
{
    res.send('you have successfully called a webservice')
})

app.post('/show', (req, res)=>{
    var _diagnosis1 = req.body['diagnosis1']
    
    res.json({"answer": query.show(_diagnosis1)})
})

app.listen(port, ()=>{console.log("This application is running on the port no: ", port)})