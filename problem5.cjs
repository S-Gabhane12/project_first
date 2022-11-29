// let inventory = require('./cars.js');

function yearLessThan(inv, prob)
{
    let data=prob(inv);
    let collect=[];
    for(let i in data){
        if(data[i]<2000)
        collect.push(data[i]);
    }
    return collect;
}
// let yearArr = yearLessThan(inventory);
// console.log(yearArr.length);

module.exports = yearLessThan;