var express = require('express')
var app = express()

require('./controllers/foassController')(app)

app.listen(3000, function (){
    console.log('Port 3000')
})