var express = require('express')
var app = express()
var port = 9000
app.use(express.static(__dirname + '/public'))

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, function() {
  console.log('listening on port ' + port)
})