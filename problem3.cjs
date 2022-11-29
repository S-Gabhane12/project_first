// let inventory = require('./cars');

function alphabeticalSort(inv)
{
    let collect=[];
    for(let i in inv){
        collect.push(inv[i].car_model);
    }
    collect.sort();
    return collect;
}

module.exports = alphabeticalSort;