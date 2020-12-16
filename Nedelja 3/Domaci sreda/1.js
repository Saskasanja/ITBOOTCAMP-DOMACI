// 1. Написати функцију која за параметар прима 
// број сати (0-24) и у зависности од доба дана исписује поруке:
//  Добро јутро , Добар дан или Добро вече.

{
    function dobaDana(sati) {
        if(sati>=4 && sati<12)
        console.log('Dobro jutro')
    }  if(sati>= 12 && sati <20)
        console.log('Dobar dan')
        else if (sati >=20 && sati< 24 )
        console.log( 'Dobro vece')

    dobaDana (0)
    dobaDana (3)
    dobaDana (11)
    dobaDana (12)
    dobaDana (21)
    dobaDana (24)
 
}


//Написати функцију која израчунава цену пице по квадратном центиметру
// (параметри функције су полупречник у цм,  и цена пице)
{   
function cenaPoCmKv(r, cenaPize   
    if ( r > 0 && cenaPize > 0){ 
        
    }
    return cenaPize / (r**2 *Math.PI)
}

let proba =cenaPoCmKv (4, 1400)
console.log(proba)
let proba2 = cenaPoCmKv (32, 1900)
console.log(proba2)