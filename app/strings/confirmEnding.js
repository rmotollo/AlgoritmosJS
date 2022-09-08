export default function confirmEnding(str, target){
    let strSubstr = str.substring(str.length - target.length);
    if(strSubstr === target){
        return true
    }
    return false
}
console.log(confirmEnding("luana", 'anaoiouioiu'));