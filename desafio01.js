// Minha resoluçao
function media() {
  // arguments são os parametros da função que esta atualmente
  var args = [].slice.call(arguments, 0);
  // O método call serve para chamar uma função, recebe dois parametros
  // primeiro o thisArg este é o valor de this. Os restantes seriam os argumentos a serem processados.
  // link completo: https://ricardo-reis.medium.com/o-m%C3%A9todo-call-no-javascriptt-efb67fd5b332
  var resul = 0;
  for (var i = 0; i < args.length; i++) {
    resul += args[i];
  }
  return resul / args.length;
}

//console.log(media(25, 75)); //50
//console.log(media(10,9,6,8,9,1,5,7)); //6.875
//console.log(media(2,5,7,1,-2)) //2.6
//console.log(media(10,10,10,10,9)) //9.8

// 1° em vídeo

/* function average(numbers) {
  var sum = 0;
  // forEach é usado para ir somando cada item do array, documentação explicando os detalhes:
  // https://blog.betrybe.com/javascript/javascript-foreach/
  numbers.forEach((number) => {
    sum += number;
  });

  const average = sum / numbers.length;

  return average;
}  */

// console.log(average([25, 75])); //50
// console.log(average([10,9,6,8,9,1,5,7])); //6.875
// console.log(average([2,5,7,1,-2])) //2.6
// console.log(average([10,10,10,10,9])) //9.8

// 2° em vídeo
function average2(...numbers) {
  // Os três pontos é um operador chamado de Spread
  // Neste exemplo ele é usado para desistruturar o array
  // Assim não precisando especificar na chamada da função que os argumentos preisam ser um array
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  // O Reduce serve para reduzir um array, ele realiza uma função com objetivo de no final gerar um unico valor
  // Documentação detahada: https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
  return sum / numbers.length;
}

console.log(average2(25, 75)); //50
console.log(average2(10, 9, 6, 8, 9, 1, 5, 7)); //6.875
console.log(average2(2, 5, 7, 1, -2)); //2.6
console.log(average2(10, 10, 10, 10, 9)); //9.8
