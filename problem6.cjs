// let inventory = require('./cars.js');



function bmwAndAudi(inv)
{
    let collect=[];
    for(let i in inv){
        if(inv[i].car_make=="Audi" || inv[i].car_make=="BMW")
        collect.push(inv[i]);
    }
    return collect;
}
// let BMWAndAudi = bmwAndAudi(inventory);
// console.log(JSON.stringify(BMWAndAudi));

module.exports = bmwAndAudi;