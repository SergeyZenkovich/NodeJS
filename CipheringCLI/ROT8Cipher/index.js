const ROT = (text, code) => {
    let result  = text;
    if (code === 'd')
    result = result.split('').map(el=> {
            if(el.toUpperCase() === el.toLowerCase()) return el;
            else {
                let charCode = el.charCodeAt(0);
                return charCode <= 72 || (charCode >=97 && charCode <= 104) ? String.fromCharCode(charCode - 8 +26) : String.fromCharCode(charCode - 8);
            }
    });
    else if (code === 'e') {
    result = result.split('').map(el=> {
            if(el.toUpperCase() === el.toLowerCase()) return el;
            else {
                let charCode = el.charCodeAt(0);
                return (charCode >=83 && charCode < 97) || charCode >= 115 ? String.fromCharCode(charCode + 8 - 26) : String.fromCharCode(charCode + 8);
            }
        });
    }
    return result.join('');
}
module.exports = {
    ROT
}