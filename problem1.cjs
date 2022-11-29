// const inventory = require('./cars');

function matchingCarId(inv, id)
{
    let carId;
    for(let i=0;i<inv.length;i++)
        if(id==inv[i].id)
            return inv[i];
}



module.exports = matchingCarId;