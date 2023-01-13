// Desafio 10
function techList(techNames, name) {
  let techArr = [];

  for (const key of techNames.sort()) {
    techArr.push({
      tech: key,
      name,

    });
  }
  if (techNames.length === 0) {
    return 'Vazio!';
  }

  return techArr;
}

function highestCount(numbers) {
  const countTracker = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const actualNumber = numbers[i];
    if (actualNumber in countTracker) {
      countTracker[actualNumber] += 1;
    } else {
      countTracker[actualNumber] = 1;
    }
  }
  let maxCount = 0;
  for (const key in countTracker) {
    if (countTracker[key] > maxCount) {
      maxCount = countTracker[key];
    }
  }
  return maxCount;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arr.length; index += 1) {
    let indexAtual = arr[index];
    if (indexAtual < 0 || indexAtual > 9 || highestCount(arr) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  arr.splice(0, 0, '(');
  arr.splice(3, 0, ')');
  arr.splice(4, 0, ' ');
  arr.splice(10, 0, '-');

  return arr.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;

  // seu código aqui
}

// Desafio 13
function hydrate(bebidas) {
  let fraseSeparda = bebidas.split(' ');

  let soma = 0;

  for (const key of fraseSeparda) {
    if (!Number.isNaN(parseInt(key, 10))) {
      soma += parseInt(key, 10);
      console.log(key);
    }
  }

  if (soma === 1) {
    return `${soma} copo de água`;
  }

  return `${soma} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
