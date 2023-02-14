/* Think of arrays as empty baskets. Array variable names should be 
plural if there are multiple items in the array. 

The index is the placement of each item in the array. The indexing of 
an item starts at ZERO, not one. You can look up an item at a specific 
index by using the following syntax arrayVariable[index number]. */

// exercise #1.
const yellowFruit = "Banana"
const orangeFruit = "Orange"
const redFruit = "Apple"
const greenFruit = "Watermelon"
const blueFruit = "Blueberry"

const fruits = ["Banana", "Orange", "Apple", "Watermelon", "Blueberry"]

console.log(fruits);

// exercise #2
const dishes = [
    "Dinner plate", "Water glass", "Salad bowl",
    "Dinner plate", "Wine glass", "Spoon",
    "Spoon", "Fork", "Salad bowl", "Whiskey glass",
    "Fork", "Spoon", "Fork"
]

/*
    Declare three variables to store the string value
    of a glass in the array. Use the correct index to
    get the right value.
*/

const waterGlass = dishes [1];
const wineGlass = dishes [4];
const whiskeyGlass = dishes [9];


console.log("I am cleaning the following glasses:")

// Put each variable in one of the parentheses below
console.log(waterGlass)
console.log(wineGlass)
console.log(whiskeyGlass)