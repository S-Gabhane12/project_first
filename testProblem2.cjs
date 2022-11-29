
const prob = require('./problem2.cjs');
let inventory = require('./cars')

const result = prob(inventory)
// problem2();

console.log("Last car is a "+result.car_make+" "+result.car_model);


    


