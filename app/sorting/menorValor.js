const arrayProdutos = require('./dados')

function cheapestProduct(productsArray, posInicial = 0){
    let cheapIndex = posInicial;
    for (let auto = posInicial; auto < productsArray.length; auto++){
        if(productsArray[auto].preco < productsArray[cheapIndex].preco){
            cheapIndex = auto;
        };
    }
    return cheapIndex;
};

console.log(cheapestProduct(arrayProdutos.livrosArray, 5))

module.exports = {cheapestProduct}