CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(

  Item_id INT NOT NULL,
  Product_Name VARCHAR(100) NOT NULL,
  Department_Name VARCHAR(100) NOT NULL,
  Price DECIMAL (10,4) NOT NULL,
  Stock_Quantity INT NOT NULL,
  PRIMARY KEY (Item_id)
  
);




