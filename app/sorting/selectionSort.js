const data = require('./dados')
const menorValor = require('./menorValor')


for(let atual = 0; atual < data.livrosArray.length; atual++){
    let menor = menorValor.cheapestProduct(data.livrosArray, atual);
    let temp = data.livrosArray[atual];
    data.livrosArray[atual] = data.livrosArray[menor];
    data.livrosArray[menor] = temp;
};

console.log(data.livrosArray);

const validacao = menorValor.cheapestProduct(data.livrosArray);

console.log(validacao);