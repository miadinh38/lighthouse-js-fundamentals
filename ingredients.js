const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", 
"baking powder", "chocolate chips", "bananas"];

console.log("Ingredient list of banada bread:");

for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}

let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

const reversed = [];
for (let i = ingredients.length - 1; i >= 0; i--) {
    const valueAtIndex = ingredients[i];
    reversed.push(valueAtIndex);
}
for (let i = 0; i < reversed.length; i++) {
    console.log(reversed[i]);
}
