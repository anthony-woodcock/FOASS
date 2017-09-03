var express = require('express')
var app = express()

app.listen(3000)

app.get('/nice/:to/:from', function (req, res) {
    var sentFrom = req.params.from
    var to = req.params.to
    var reply = 'Hey! your\'re doing a great job ' + to + '.'
    res.send({
        message: reply,
        from: sentFrom
    })
  })

app.get('/neutral/:to/:from', function (req, res) {
    var sentFrom = req.params.from
    var to = req.params.to
    var reply =  sentFrom + ' has no strong feelings to ' + to + ' one way or the other.'
    res.send({
        message: reply,
        from: sentFrom
    })
  })

app.get('/whatever/:to/:from', function (req, res) {
    var sentFrom = req.params.from
    var to = req.params.to
    var reply =  sentFrom + ' thinks  ' + to + ' is doing well or something I don\'t really care.'
    res.send({
        message: reply,
        from: sentFrom
    })
  })

