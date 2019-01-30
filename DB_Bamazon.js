var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Sq120899680",
  database: "top_songsDB"
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "default",
      message: "What is the ID of the product you would like to buy?",

    })
    .then(function (answer) {
      switch (answer.action) {
        case "Find product":
          // return product information from table

          break;

          connection.end();
          break;
      }
    });

  inquirer
    .prompt({
      name: "action",
      type: "default",
      message: "How many units would you like to purchase?",

    })
    .then(function (answer) {
      switch (answer.action) {
        case "Find product":
          // return product information from table

          break;

          connection.end();
          break;
      }
    });
}