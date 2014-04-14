var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express(),
    sqlite3 = require('sqlite3').verbose(),
    db = new sqlite3.Database(':file:data.db:');

var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/new', function (req, res) {
  res.render('new')
})

app.get('/boards', function (req, res) {
  db.all("SELECT rowid AS id, rows FROM boards", function(err, boards) {
    res.json(boards)
  })
})

app.post('/boards', function (req, res) {
  var rows_json = JSON.stringify(req.body.rows),
      stmt = db.prepare("INSERT INTO boards(rows) VALUES(?)")
  stmt.run(rows_json)
  stmt.finalize()
  res.json(200)
})

app.listen(3000);
