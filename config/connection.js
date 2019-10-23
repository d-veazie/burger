let mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}
//connect
connection.connect(function(err) {
  if (err) console.log(err);
  console.log("Connected Port " + connection.threadId);
});
//export
module.exports = connection;
