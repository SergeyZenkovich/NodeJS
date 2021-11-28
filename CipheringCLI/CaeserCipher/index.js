const Caeser = (text, code) => {
    let result  = text;
    if (code === 'd')
    result = result.split('').map(el=> {
            if(el.toUpperCase() === el.toLowerCase()) return el;
            else {
                let charCode = el.charCodeAt(0);
                return charCode === 122 || charCode == 90 ? String.fromCharCode(charCode + 1 - 26) : String.fromCharCode(charCode + 1);
            }
    });
    else if (code === 'e') {
    result = result.split('').map(el=> {
            if(el.toUpperCase() === el.toLowerCase()) return el;
            else {
                let charCode = el.charCodeAt(0);
                return charCode === 65 || charCode == 97 ? String.fromCharCode(charCode - 1 + 26) : String.fromCharCode(charCode - 1);
            }
        });
    }
    return result.join('');
}
module.exports = {
    Caeser
}