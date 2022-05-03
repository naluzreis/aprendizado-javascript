// Desafio 11
function generatePhoneNumber(arrTelefone) {
  let conts = {
    conts1: 0,
    conts2: 0,
    conts3: 0,
    conts4: 0,
    conts5: 0,
    conts6: 0,
    conts7: 0,
    conts8: 0,
    conts9: 0,
  };
  if (arrTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrTelefone.length; index += 1) {
    if (arrTelefone[index3] < 0 || arrTelefone[index3] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let index2 = 0; index2 < arrTelefone.length; index2 += 1){
    if(arrTelefone[index2] === 0){
      conts.conts1 += 1;
    }else if (arrTelefone[index2] === 1){
      cont.conts2 += 1;
    }else if (arrTelefone[index2] === 2){
      cont.conts3 += 1;
    } else if (arrTelefone[index2] === 3){
      cont.conts4 += 1;
    }else if (arrTelefone[index2] === 4){
      cont.conts5 += 1;
    }else if (arrTelefone[index2] === 5){
      cont.conts6 += 1;
    }else if (arrTelefone[index2] === 6){
      cont.conts7 += 1;
    }else if (arrTelefone[index2] === 7){
      cont.conts8 += 1;
    }else if (arrTelefone[index2] === 8){
      cont.conts9 += 1;
    }

  }
  let okNumber = (`(${arrTelefone[0]}${arrTelefone[1]}) ${arrTelefone[2]}${arrTelefone[3]}${arrTelefone[4]}${arrTelefone[5]}${arrTelefone[6]}-${arrTelefone[7]}${arrTelefone[8]}${arrTelefone[9]}${arrTelefone[10]}`);
  return okNumber;
}
// console.log(generatePhoneNumber([6, 3, 5, 2, 7, 9, 7, 4, 0, 2, 0]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
