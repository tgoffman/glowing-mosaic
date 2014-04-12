var express = require('express'),
    exphbs  = require('express3-handlebars'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/new', function (req, res) {
  res.render('new')
})

app.listen(3000);
