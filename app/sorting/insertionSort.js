var insert = function(array, rightIndex, value) {
    //recebe a array o index até onde a array está ordenada e o valor a direta do index da ordenação.
    for( var index  = rightIndex; index >= 0 && array[index] > value; index--){
        //inicia um loop para olhar os valores de tras para frente da ordenação enquanto o index não termina todo o array de tras para frente(index>=0) e enquanto o valor observado for maior que o valor alvo. Quando o valor é menor que o alvo sai do loop.
        array[index + 1] = array[index];
        //"empurra os valores para a direita" abrindo o espaço para value.
    };
    array[index + 1] = value;
    //ao sair do loop pelas condições acima(encontrou um valor menor que o valor observado ou terminou o array) insere o valor alvo no espaço aberto.   
};

var insertionSort = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        insert(array, i, array[i + 1])
    };
    return array;
}

var array = [5, 3, 7, 11, 13, 2, 9, 6];


var result = insertionSort(array);
console.log(result)
