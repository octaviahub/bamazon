DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sims", "Video Games", 49.95, 150),
  ("Tomb Raider", "Video Games", 59.99, 200),
  ("Artisanal Cheese", "Food and Drink", 24.50, 50),
  ("Romper", "Apparel", 75.00, 5),
  ("Deodorant", "Necessities", 42.42, 42),
  ("Forgetting Sarah Marshall", "Films", 15.00, 25),
  ("The Bride of Chuckie", "Films", 25.50, 57),
  ("Candy Land", "Board Games", 30.50, 35),
  ("Chutes and Ladders", "Board Games", 19.95, 23);
SELECT * FROM departments;

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Video Games", 200),
  ("Food and Drink", 100),
  ("Apparel", 50),
  ("Necessities", 300),
  ("Films", 35),
  ("Board Games", 0);
