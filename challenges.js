// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// console.log(compareTrue(value1, value2));

// Desafio 2
let area;

function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}

//  console.log(calcArea(base,height));

// Desafio 3
let array = [];
function splitSentence(string) {
  array = string.split(' ');
  return array;
}

// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
// referência do split

// Desafio 4
function concatName(arr) {
  let juntar = `${arr[arr.length - 1]}, ${arr[0]}`;
  return juntar;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosDeVitoria = wins * 3;
  let pontosDeEmpate = ties * 1;
  let numeroDePontos = pontosDeVitoria + pontosDeEmpate;
  return numeroDePontos;
}
// console.log(numeroDePontos);

// Desafio 6
function highestCount(arrayNumbers) {
  let maiorNumero = arrayNumbers[0];
  let contador = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > maiorNumero) {
      maiorNumero = arrayNumbers[index];
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (maiorNumero === arrayNumbers[index]) {
      contador += 1;
    }
  }
  return contador;
}
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;
  if (Math.abs(distance1) > Math.abs(distance2)) {
    return 'cat2';
  } else if (Math.abs(distance2) > Math.abs(distance1)) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(10, 4, 22));

// Desafio 8
// refatorar com switch case
function fizzBuzz(arrNumbers) {
  let arrayWord = [];
  for (let index = 0; index < arrNumbers.length; index += 1) {
    if (arrNumbers[index] % 3 === 0 && arrNumbers[index] % 5 === 0) {
      arrayWord.push('fizzBuzz');
    } else if (arrNumbers[index] % 3 === 0) {
      arrayWord.push('fizz');
    } else if (arrNumbers[index] % 5 === 0) {
      arrayWord.push('buzz');
    } else {
      arrayWord.push('bug!');
    }
  }
  return arrayWord;
}
// console.log(fizzBuzz([2, 9, 25]));

// Desafio 9
function encode(stringCode) {
  let newString = (stringCode.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5));
  return newString;
}
// console.log(encode('hello'));

function decode(stringDecode) {
  let newString1 = (stringDecode.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u'));
  return newString1;
}

// Desafio 10
function techList(tecnologias, nome) {
  let tecnologiasOrdem = tecnologias.sort();
  let newObjeto = [];
  for (let index = 0; index < tecnologiasOrdem.length; index += 1) {
    let objeto = {
      name: nome,
      tech: tecnologiasOrdem[index],
    };
    newObjeto.push(objeto);
  }
  if (tecnologias.length > 0) {
    return newObjeto;
  } else if (tecnologias.length === 0) {
    return ('Vazio!');
  }
}
// console.log(techList([], "Ana"));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
