// let inventory = require('./cars.js')

function carsYear(inv)
{
    let collect=[];
    for(let i in inv){
        collect.push(inv[i].car_year);
    }
    return collect;
}

// let yearArr = carsYear(inventory)
// console.log(yearArr);

module.exports = carsYear;