//6. На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER)
 //   И постоје 2 дугмета за наручивање одмах 

   // 1. Дугмићи за 'наручивање' повећавају бројач
    //2. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку 
   // (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
   // Напомена:  X је бројач, проверити да ли је бројач 0, и ако јесте кликом 
   //на наручивање одмах избацује одговарајућу поруку за грешку
   const numOfPizzas = document.querySelector('#num-of-pizzas');
   const numOfPizzas2 = document.querySelector('#num-of-pizzas2');
   const order = document.querySelector('#order');
   const order2 = document.querySelector('#order2');
   let num = document.querySelector('#num');
   let count = 0;
    console.log(num);
   numOfPizzas.addEventListener("click", () =>{
        count++;
        num.innerHTML = count;
   })

   numOfPizzas2.addEventListener("click", () =>{
    count++;
    num.innerHTML = count;
    })

    order.addEventListener("click", () =>{
        let orderText = document.createElement('p');
        document.body.appendChild(orderText);
        let time = new Date();
        if(count == 0){
            orderText.innerHTML = `Ne mozete naruciti 0 pizza.`;
        } else {
        orderText.innerHTML = `Narucili ste ${count} pizza, ${time}`;
        num.innerHTML = 0;
        }
         
    })
    order2.addEventListener("click", () =>{
        let orderText = document.createElement('p');
        document.body.appendChild(orderText);
        let time = new Date();
        if(count == 0){
            orderText.innerHTML = `Ne mozete naruciti 0 pizza.`;
        } else {
        orderText.innerHTML = `Narucili ste ${count} pizza.`;
        num.innerHTML = 0;
        }
         
    })