export default function repeatStringNumTimes(str, num) {
    if(num < 1){
        return ""
    };
    return str + repeatStringNumTimes(str, num - 1);
  }

  console.log(repeatStringNumTimes('a', 1))