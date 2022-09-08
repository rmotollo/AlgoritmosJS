const fs = require('fs');


try{fs.readFile('./app/assets/pub/test.txtt', (data) =>{
    console.log(data.toString());
});}catch(error){
    console.log("Passei por aqui!")
    console.error(error)
}
fs.cre