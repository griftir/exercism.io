export function encode(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let rev = 'zyxwvutsrqponmlkjihgfedcba';
    let index = x => alpha.indexOf(x);
    let mapper = x => index(x) > -1 ? rev[index(x)]: x
    let mapper2 = (x,index) => index % 5 === 0 ? ' ' + x : x
    return str.toLowerCase().replace(/\s/g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').split('').map(mapper).map(mapper2).join('').trim();
}


