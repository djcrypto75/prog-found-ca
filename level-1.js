// question 1

var personName = "Geir";

// question 2

var person = {
   name: "Geir",
   Age: 44
};

// question 3

var outOfStock = false;

if (outOfStock === true) {
   console.log("Out of stock");
} else {
   console.log("In stock");
}

// question 4

var numbers = [5, 11, 75, 19, 32];

for (var i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}

// question 5

for (var i = 15; i <= 25; i++) {
   console.log(i);
}

// question 6

for (var i = 15; i <= 25; i++) {
   if (i === 20) {
      console.log(i);
   }
}

// question 7

var products = [
   {
      productName: "iPhone 11",
      productPrice: 799,
      productInStock: true
   },
   {
      productName: "iPad Pro",
      productPrice: 899,
      productInStock: false
   }
];
for (var i = 0; i < products.length; i++) {
   console.log(products[i].productPrice);
   console.log(products[i].productInStock);
}

// question 8

function whatIDontLike(thisFootballTeam) {
   console.log("I dont like " + thisFootballTeam);
}
whatIDontLike("Liverpool");

// question 9

function subtractTwoNumbers(number1, number2) {
   var sum = number1 - number2;
   console.log(sum);
}
subtractTwoNumbers(11, 5);

// question 10

ourProducts = [];

function addProducts(products) {
   ourProducts.push(products);
}
addProducts("Macbook Pro");
