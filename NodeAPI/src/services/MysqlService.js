var mysql = require("mysql");
const config = require("config");

var conn = mysql.createConnection(config.get("dbConfig"));

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected To Database");
});

process.on("exit", code => {
  conn.end();
  console.log(`Closing mysql channel`);
});

export const executePOSTQuery = (sql, values, callback) => {
  conn.query(sql, [values], function(err, result) {
    console.log("Number of rows affected : " + result.affectedRows);
    console.log(
      "Number of records affected with warning : " + result.warningCount
    );
    console.log("Message from MySQL Server : " + result.message);
    if (err) console.log(err);
    return callback(result);
  });
};

export const executeQuery = (sql, callback) => {
  conn.query(sql, function(err, result) {
    if (err) throw err;
    return callback(result, null);
  });
};
