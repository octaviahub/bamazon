const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");


const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "", 
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) {
		console.error("error connecting:" + err.stack);
	}
	loadProducts();
});

function laodProducts() {
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;

		console.table(res);

		promptCustomerForItem(res);

	});
}

function promptCustomerForItem(inventory) {
	inquirer
		.prompt([
		{	
			type: "input",
			name: "choice", 
			mesage: "What is the ID of the item you would like to purchase? [Quit with Q]",
			validateL function(val) {
				return !isNaN(val) || val. to LowerCase() === "q";
			}
		}
	])
		.then(function(val) {
			checkIfShouldExit(val.quantity); 
			const quantity = parseInt(val.quantity);

			if (quantity > product.stock_quantity) {
				console.log("\nInsufficient quantity!");
				loadProducts();
			}
			else {
				makePurchase(product, quantity);
			}
		});
}

function makePurchase (product, quantity) {
	connection.query(
		"UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
		[quantity, product.item_id],
		function(err, res) {
			console.log("\nSuccessfully purchased" + quantity + "")
		}
		)
}