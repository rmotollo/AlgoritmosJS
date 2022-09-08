function zeroArray(m,n) {
    let matriz = [];
    let row = [];

    for (i = 0; i < m; i++){
        row = [];
        for (j = 0; j < n; j++){
            row.push(0);
        }
        matriz.push(row);
    }
    return matriz;
}

function printMatriz(matriz){
    for (i in matriz){
        console.log(`|${matriz[i]}|`)
    }
}

let myMatriz = zeroArray(3,3);


printMatriz(myMatriz)
console.log(zeroArray(3,2));
console.log(zeroArray(7,2));