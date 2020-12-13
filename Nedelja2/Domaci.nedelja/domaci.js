// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу 

let cena = 1000
let precnik = 32
let povrsina =Math.pow((precnik / 2), 2) * Math.PI
let cenaPoCmKv =cena /povrsina
console.log( 'Cena po cm² je', cenaPoCmKv, 'dinara')

// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5

for (let i =1; i <= 100; i++){
   if ((i % 3 ==0) && (i % 5 ==0)){
       console.log(' FizzBuzz')

   }
   else if(i% 3 ==0) {
       console.log('Fizz')
   }
   else if (i % 5 ==0) {
       console.log( 'Buzz' )
            }
    else  {

    console.log(i)
    }
}


// Исписати Марио пирамиду одређене висине:
// За n = 5

// #
// ##
// ###
// ####
// #####

let n = 5
for (let i = 1; i<=n ; i++){
    console.log( '#'.repeat(i))

}


// Исписати Марио пирамиду одређене висине:
// За n = 5

//     #
//    ## 
//   ###
//  ####   
// #####

let N = 5
for (let i=1; i <= N; i++){
    console.log(' ' .repeat(N -1) + '#'.repeat(i))
    
}


// Исписати Марио пирамиду одређене висине:
// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####

let x = 5
for (let i = 1; i<= x; i++){
    console.log (' '.repeat(x-i) + '#'.repeat(i) + ' ' + '#'.repeat(i))

}
