class Textbox {
    constructor(selector, regex){
        this._value = '';
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = regex;
    }
    get value(){
        return this._value;
    }
    set value(v){
        this._value = v;

        for(let i = 0; i < this._elements.length; i++){
            this._elements[i].value = v;
        }
    }
    get elements(){
        return this._elements;
    }
    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
