const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";
const Atbash = (text) => {
    let result  = text;
    result = result.split('').map(el=> {
            if(el.toUpperCase() === el.toLowerCase()) return el;
            else {
                let index = alphabet.indexOf(el);
                return tebahpla[index];
            }
        });
    return result.join('');
}
module.exports = {
    Atbash
}