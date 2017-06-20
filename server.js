const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      http = require('http'),
      cors = require('cors'),
      moment = require('moment'),
      request = require('request');


      var app = express()
      app.use(cors());
      app.use(bodyParser.json())


      const db = massive.connectSync({connectionString: 'postgres://postgres:1234a@localhost/testDB'})


  app.post('/send', function(req, res) {
    var date = moment().calendar();
    db.postdata([req.body.text, date], function(err, data) {
      console.log(moment().calendar())
      if (err){
        res.status(500).json(err)
      }else {
        res.status(200).json(data)
      }
    })
  })

  app.get('/getData', function(req, res) {
    db.run('select * from data', function(err, response) {
      res.send(response)
    })
  })

app.delete('/delete/:id', function(req, params) {
  db.removedata([req.params.id], function(err) {
    console.log("id err", err)
  })
})

app.put('/change/:id', function(req, res, params) {
  db.changedata([req.body.id, req.body.item], function (err, results) {
    res.send("hello")
  })
})

app.use(express.static('./public'))

      var port = 3000


  app.listen(port, function() {

    console.log("listining on port " + port)

  })
