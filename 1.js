//Написати функцију која исписује све елементе низа који су дељиви са 5
// function divisibleByFive(arr){
//     ...
// }

// divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5

// function lifeSupply(numPerMonth,age){
//     ...
// }
function divisibleByFive(arr){
    let array =[]
    for (let el of arr) {
        if (el % 5 ==0)
        array.push(el)

    }
    console.log(array)
}

divisibleByFive([1,2,3,4,5,10,15,23,1,5])


// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате 
// (Рачуна се да је довољно достављати до стоте године) 
//lifeSupply(10,26) // Враћа 8880
//console.log(lifeSupply(10,26)) // Исписује 8880

function lifeSupply(numPerMonth,age){
    return (100 - age) * 12 * numPerMonth
}
let test =lifeSupply( 10 , 26)
console.log(test)