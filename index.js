// Estructura de un CLOSURE
//1º declaramos una funcion
const moneyBox = () => {
    //2º Declaramos la variable que va a ir en la segunda funcion
    var saveCoins = 0;
    
    //3º dentro de la funcion declaramos otra funcion con parametro
    const countCoins = (coins) => {
        //4º sumamos los argumentos a la variable declarada fuera, en la primera funcion
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`); //i5º mprimimos la variable
    }
    //6º retornamos en el scope de la primera funcion la segunda funcion
    return countCoins;
}

//7º declaramos una variable y guardamos los resultados de la funcion en ella
let myMoneyBox = moneyBox();

//8º Por ultimo, se va sumando cada vez que se ejecuta la funcion con un parametro
myMoneyBox(5);
myMoneyBox(10);


//LEXICAL CLOSURE
const buildCount = (i) =>{
    let count = i;

    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
}

const myCount = buildCount(1);
myCount();//1
myCount();//2
myCount();//3

const myOtherCount = buildCount(10);
myOtherCount();//1
myOtherCount();//11
