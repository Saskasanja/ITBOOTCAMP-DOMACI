//За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)

{
    let a = 15
    let b = 5
    let zbir = a + b
        console.log(zbir )
    let razlika = a - b
      console.log (razlika)
    let proizvod = a*b
      console.log (proizvod)
    let kolicnik = Math.floor (a/b)
      console.log(kolicnik)
    let ostatakPriDeljenju = a % b
      console.log (ostatakPriDeljenju)
    let stepen = a ** b
      console.log (stepen)

}

//. Направити променљиву која представља цену производа коју купац жели да купи
//. Направити променљиву која представља количину новца коју купац има
//. Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//. Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

{
    let cena = 180
    let kolicina = 3
    let novac = 220
    let ukupnaCena = cena * kolicina
    let razlikaUnovcu = novac - ukupnaCena
    if (novac < ukupnaCena) {
        console.log('Nemate dovoljno novca, imate ${novac} dinara. Za proizvod vam je potrebno ${ukupnaCena} .');
    } else{
        console.log('Uspesno ste kupili prizvod i trenutno stanje iznosi ${razlikaUnovcu} dinara');
    }
}

// 3.Направити променљиву која има вредност неког броја (цео број)
//Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
//Ако није, Број _ није дељив са 3

{
    let broj =15
    if(broj % 3 == true) {
        console.log('Broj je deljiv sa 3');
    } else{
        console.log('Broj nije deljiv sa 3');
    }
}

//Исписати првих 1000 бројева дељивих са 5
for(let i = 1; i <= 1000; i++){
    if(i % 5== 0)
    console.log(i)
}