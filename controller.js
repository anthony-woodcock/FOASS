var express = require('express')
var app = express()

app.listen(3000, function () {
    console.log('Listening on port 3000')
})

app.get('/nice/:to/:from', function (req, res) {
    var from = req.params.from
    var to = req.params.to
    var message = 'Hey! your\'re doing a great job ' + to + '.  This was sent from ' + from + '.'
    res.send(message)
  })

app.get('/neutral/:to/:from', function (req, res) {
    var from = req.params.from
    var to = req.params.to
    var message =  from + ' has no strong feelings to ' + to + ' one way or the other. '
    res.send(message)
  })

app.get('/whatever/:to/:from', function (req, res) {
    var from = req.params.from
    var to = req.params.to
    var message =  from + ' thinks  ' + to + ' is doing well or something I don\'t really care. '
    res.send(message)
  })
