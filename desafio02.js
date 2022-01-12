//Exercício falando especificamente sobre funções recursivas

//A função deve se auto-invocar, no interior dela mesma;
//É necessário uma verificação para que possamos concluir a recursão. Caso contrário, teremos um loop infinito!

// Link falando mais sobre o assunto:
// https://ricardo-reis.medium.com/fun%C3%A7%C3%B5es-recursivas-no-javascript-13a1fc099c9f
// https://blog.da2k.com.br/2015/02/27/javascript-como-funcionam-as-funcoes-recursivas/

function recursiva(number) {
  if (number == 0) {
    return "";
  }
  if (number == 1) {
    return "chuck";
  } else {
    return "chuck-" + recursiva(number - 1);
  }
}

function chirp(n) {
  if (n < 1 || isNaN(n)) return;
  return n < 2 ? "chirp" : chirp(n - 1) + "-chirp";
}

console.log(recursiva(3));

console.log(chirp(3));
