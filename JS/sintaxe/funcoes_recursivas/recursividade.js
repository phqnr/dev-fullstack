function dividir(num) {
  console.log(num)
  if (num % 2 === 0) {
    dividir(num / 2)
  } else {
    return num
  }
}

// dividir(1024);

function dobrar(num) {
  console.log(num)
  if (num < 1000) {
    dobrar(num * 2)
  } else {
    return num
  }
}

// dobrar(10);


function fatorial(num) {
  console.log("Número: " + num)
  if (num === 0) { // caso-base
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(num + " * " + (num - 1) + "!")
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(8));