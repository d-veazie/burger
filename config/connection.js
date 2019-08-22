
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burger_db"
});
// connect 
connection.connect(function(err) {
  if (err) {
console.error("error connecting: " + err.stack);
return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export 
module.exports = connection;