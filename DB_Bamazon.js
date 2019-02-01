var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");
require('dotenv').config()

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.SQL_Password,
  database: "Bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  displayProducts();
});

function runSearch() {
  //inquirer.prompt([]).then(function(answers){});

  inquirer
    .prompt([{
      name: "pID",
      message: "What is the ID of the product you would like to buy?"

    },{
      name: "units",
      message: "How many units would you like to purchase?"

    }])
    .then(function (answer) {
     
      console.log(answer.pID , answer.units);

      makePurchase(answer.pID, answer.units);
     
      
    });

}

// Display all Products
const displayProducts = () => {
  let qsel = ("SELECT * FROM Bamazon.products");
  
  const query = connection.query(qsel, function(err, results){
    if (err) throw err;
    // do stuff here
    console.table(results);
    runSearch();    
  } );
  

};

// To UPdate Product
const updateProduct = (id, quantity) => {
  let qsel = ("UPDATE PRODUCTS SET ? WHERE ?");
  
  const query = connection.query(qsel, [{stock_quantity:quantity},{item_id:id}], function(err, results){
    if (err) throw err;
    // do stuff here
    console.log(results.affectedRows);
    displayProducts();    
  } );
  

};

// Make Prurchase

// function makePurchase(id, units){};
const makePurchase = (id, units) => {
  let qsel = ("SELECT * FROM Bamazon.products where ?");
  console.log("in here");
  const query = connection.query(qsel, [{item_id:id}], function(err, results){
    if (err) throw err;
    // do stuff here

    let eStockQ = results[0].Stock_Quantity;
    if(eStockQ < units){
      console.log("Insuffgldjflkgj");
    }else{
      let quan = eStockQ - units;
      updateProduct(id,quan);
    }

  } );
  

};
