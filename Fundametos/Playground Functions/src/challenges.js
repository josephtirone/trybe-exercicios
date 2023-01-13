// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2 === true) {
    console.log('true');
    return true;
  }
  console.log('false');
  return false;
}
const qualquerNome = true;

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;

  return calc;
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(' ');

  return fraseSeparada;
}

// Desafio 4
function concatName(palavras) {
  return `${palavras[palavras.length - 1]}, ${palavras[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalWins = wins * 3;

  let totalTies = ties * 1;

  let totalScore = totalWins + totalTies;

  return totalScore;
  // seu código aqui
}

// Desafio 6

const highestCount = (numbers) => {
  let maxCount = 0;
  const highestNumber = numbers.sort((a, b) => a - b)[numbers.length - 1];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      maxCount += 1;
    }
  }
  return maxCount;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;

  if (dist1 <= 0) {
    dist1 *= -1;
  }

  if (dist2 <= 0) {
    dist2 *= -1;
  }

  if (dist1 < dist2) {
    return 'cat1';
  } if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let returnArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    let numeroAtual = arr[index];
    if (numeroAtual % 3 === 0 && numeroAtual % 5 === 0) {
      returnArr.push('fizzBuzz');
    } else if (numeroAtual % 3 === 0) {
      returnArr.push('fizz');
    } else if (numeroAtual % 5 === 0) {
      returnArr.push('buzz');
    } else {
      returnArr.push('bug!');
    }
  }

  return returnArr;
}

// Desafio 9
function encode(param) {
  const sequencia = {

    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let varParam = `${param}`;

  for (const key in sequencia) {
    if (qualquerNome) {
      varParam = varParam.replaceAll(key, sequencia[key]);
    }
  }

  return varParam;
}

function decode(param) {
  const sequencia = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let varParam = `${param}`;

  for (const key in sequencia) {
    if (qualquerNome) {
      varParam = varParam.replaceAll(key, sequencia[key]);
    }
  }

  return varParam;
}

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
};
