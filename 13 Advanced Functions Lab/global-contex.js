// Global context

function random() {
    console.log(this);
    return Math.random();
}
random(); // global context = window object


// Object context

let obj = {
    name: 'Peter',
    greed() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
obj.greed() // method invocation
let greed = obj.greed; // copy function by reference
greed() // global invocation

// DOM element must execute in browser   contex: this is the element
// element.addEventListener('click', function (){

// });


// Nested functions

function a() {
    let name1 = 'asd1'
    function b() {
        let name2 = 'asd2'
        function c() {
            let name3 = 'asd3'
            function d() {
                let name4 = 'asd4'
                console.log(this);
            }
            d() // global invocation
        }
        c()
    }
    b()
}
a();