const {Transform, pipeline} = require('stream');
const {createReadStream, createWriteStream} = require('fs');
const {Caeser} = require('./CaeserCipher');
const {Atbash} = require('./AtbashCipher');
const {ROT} = require('./ROT8Cipher');


// const wrFile = createWriteStream('./files/output.txt');
const rFile = createReadStream('files/input.txt');
const wrFile = createWriteStream('./CipheringCLI/files/output.txt');
const input = process.stdin;



class CustomTransform extends Transform {
    constructor(options = {}) {
        super(options);
    }
    _transform(text, enc, cb) {
        let textResult = '';
        if(stringifChunk.match('-C1')){
           text = Caeser(text, 'e');
        } else if(stringifChunk.match('-C0')){
            text = Caeser(text, 'd');
        } else if(stringifChunk.match('-R1')){
            text = ROT(text, 'e');
        } else if(stringifChunk.match('-R0')){
            text = ROT(text, 'd');
        } else if(stringifChunk.match('-A')){
            text = Atbash(text);
        }
        this.push(text);
        
        cb();
    }
    _flush(){
        
    }
}

class CustomTransformForSettings extends Transform {
    constructor(options = {}) {
        super(options);
    }
    _transform(chunk, enc, cb) {
        let text = '';
        const stringifChunk = chunk.toString();
        if(stringifChunk === '\n') input.unpipe();
        const configIndex = stringifChunk.indexOf('-c ');
        const inputIndex = stringifChunk.indexOf('-i ');
        const output = stringifChunk.indexOf('-o ');
        const configString = stringifChunk.splice(configIndex + 3, inputIndex);

        // const transforms = configString.split('-').map(element => {
        //     if()
        // });

        const textArr = stringifChunk.split('--')[1];
        this.push(text);
        
        cb();
    }
    _flush(){
        
    }
}

const transform = new CustomTransform();

pipeline(
    input,
    transform('dddd'),
    wrFile,
    (err) => {
        console.log(err);
    }
)
