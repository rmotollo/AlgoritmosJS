function checaPalindromo(word){
    if (word.length <= 1){
        return true
    }
    if(word.slice(0,1) != word.slice(-1)){
        return false
    }
    return checaPalindromo(word.slice(1, -1))
}
 console.log(checaPalindromo('a'));
 console.log(checaPalindromo('motor'));
 console.log(checaPalindromo('rotor'));