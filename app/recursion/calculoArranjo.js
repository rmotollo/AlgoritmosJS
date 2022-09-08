import factorializeRecursion from "./retornaFatorial.js";

const arranjoSimples = (total, seletores) => {
    return (factorializeRecursion(total)/(factorializeRecursion(total) - factorializeRecursion(seletores)))
}

console.log(arranjoSimples(25, 15))