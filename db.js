var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':file:data.db:');

db.serialize(function() {
  db.run("CREATE TABLE boards(rows TEXT)");
});

db.close();
