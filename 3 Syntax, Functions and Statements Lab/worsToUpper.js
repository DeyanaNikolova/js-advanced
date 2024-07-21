function solve(input) {

    const pattern = /[A-Za-z]+/g;
    let matched = input.match(pattern);
  
    let result = [];
    for (let i = 0; i < matched.length; i++) {
      let word = matched[i].toUpperCase();
      result.push(word);
    }
    console.log(result.join(', '));
  }
  solve('Hi, how are you?');
  solve('hello');
  solve('Functions in JS can be nested, i.e. hold other functions');