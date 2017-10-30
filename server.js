const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      http = require('http'),
      cors = require('cors'),
      moment = require('moment'),
      request = require('request');
      constring = "postgres://postgres:1234a@localhost/testDB";


      const app = express();

      app.use(cors());
      app.use(bodyParser.json())

      // app.use(session({
      //   resave: true, //Without this you get a constant warning about default values
      //   saveUninitialized: true, //Without this you get a constant warning about default values
      // }))
      app.use(express.static('./public'))


      // const db = massive.connectSync({connectionString: 'postgres://postgres:1234a@localhost/testDB'})
      massive(constring).then((db) => {
          app.set('db', db);
          db.createtable().then(
            function() {
              console.log("data table created")
            }
          )
          .catch(
            function(err){
              console.log("data table err", err)
            })
      })

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


      var port = 8084


  app.listen(port, function() {

    console.log("listining on port " + port)

  })
