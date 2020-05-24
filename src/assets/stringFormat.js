export function pad(num, n) {
    let str ='00000000000000000000000000000'+num; //爱几个0就几个，自己够用就行
    return str.substr(str.length-n);
}