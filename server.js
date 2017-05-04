const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      moment = require('moment')
      request = require('request');


      var app = express()
      app.use(cors());
      app.use(bodyParser.json())

      const db = massive.connectSync({connectionString: 'postgres://postgres:1234a@localhost/testDB'})

  app.post('/send', function(req, res) {
    db.postdata([req.body.text], function(err, data) {
      var c = moment().calendar();
      console.log(c)
    })
  })

  app.get('/getData', function(req, res) {
    db.run('select * from data', function(err, response) {
      res.send(response)
    })
  })

app.delete('/delete/:id', function(req, params) {
  db.removedata([req.params.id], function(err) {
    console.log(err)
    console.log(params)
  })
})

app.put('/change/:id', function(req, res, params) {
  db.changedata([req.body.id, req.body.item], function (err, results) {
    console.log(err)
    res.send("hello")
  })
})

app.use(express.static('./public'))

      var port = 3000


  app.listen(port, function() {

    console.log("listining on port" + port)

  })
